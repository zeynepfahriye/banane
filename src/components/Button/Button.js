import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import styles from './ButtonStyle'

const Button = ({ text, onPress, loading, theme }) => {
    return (
        <TouchableOpacity
            style={styles[theme].container}
            onPress={onPress}
            disabled={loading}>
            {loading ? (
                <ActivityIndicator color='white' />
            ) : (
                <View style={styles[theme].container}>
                    <Text style={styles[theme].title}>{text}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Button;
