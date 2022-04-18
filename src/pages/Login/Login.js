import React, { useState } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import authErrorMessageParse from '../../utils/authErrorMessageParse';
import styles from './LoginStyle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';

const initialFormValues = {
    userMail: '',
    password: '',
}

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false)

    function handleSignUp() {
        navigation.navigate('SignupPage')
    }
    const handleFormSubmit = async formValues => {
        if (!formValues.usermail && !formValues.password) {
            showMessage({
                message: 'E-posta adresi ve şifre alanları doldurulmak zorunda.',
                type: 'danger',
            });
            return;
        }

        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            setLoading(false);
            navigation.navigate('MessagesScreen');
        } catch (error) {
            setLoading(false);
            showMessage({
                message: authErrorMessageParse(error.code),
                type: 'danger',
            });
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bana ne ?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input placeholder="e-mail adresini giriniz"
                            value={values.userMail}
                            onChange={handleChange('userMail')}
                        />
                        <Input placeholder="Şifrenizi Giriniz"
                            value={values.password}
                            onChange={handleChange('password')}
                        />
                        <Button text="Giriş Yap" onPress={handleSignUp} />

                    </>
                )}
            </Formik>
            <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} loading={loading} />
        </View>
    )
}
export default Login;