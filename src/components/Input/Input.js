import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './InputStyle'

const Input = ({ onChange, placeholder, value, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize='none'
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                secureTextEntry={isSecure}
                placeholderTextColor="#808080"
            />
        </View>
    )
}
export default Input;
