import React, { useState } from 'react';
import { View } from 'react-native'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Modal from 'react-native-modal'
import styles from './ContentInputStyle'

const ContentInput = ({ visible, onClose, onSend }) => {

    const [text, setText] = useState(null);

    function handleSend() {
        if (!text) {
            return;
        }
        onSend(text);
        setText('');
    }
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Input placeholder="Anlat derdini"
                        onChangeText={setText}
                        multiLine
                    />
                </View>
                <Button text="Gönder" onPress={() => handleSend(text)} />
            </View>
        </Modal>
        //modalın açılır kapanır durumunu message sayfamdan yöneteceğim için visible durrumunu da oradan kontrol edeceğim
    )
}
export default ContentInput;