import React from 'react';
import { View, Text } from 'react-native';
import styles from './SignupStyle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParse';

const initialFormValues = {
    userMail: '',
    password: '',
    repassword: ''
}

const Signup = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        navigation.goBack();
    };

    const handleFormSubmit = async formValues => {
        if (!formValues.usermail && !formValues.password) {
            showMessage({
                message: 'E-posta adresi ve şifre alanları doldurulmak zorunda.',
                type: 'danger',
            });
            return;
        }

        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: 'danger',
            });
            return;
        }

        try {
            setLoading(true);
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: 'success',
            });
            navigation.navigate('LoginPage');
            setLoading(false);
        } catch (error) {
            setLoading(true);
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger',
            });
            setLoading(false);
            return;
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
                        <Input placeholder="Şifrenizi Tekrar Giriniz"
                            value={values.repassword}
                            onChange={handleChange('repassword')}
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </>
                )
                }
            </Formik>

            <Button text="Giriş Yap" theme="secondary" onPress={handleLogin} />
        </View>
    )
}
export default Signup;