import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import FloatingButton from '../../components/FloatingButton'
import ContentInput from '../../components/Modal/ContentInput';
import styles from './MessageStyle'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import MessageCard from '../../components/MessageCard/MessageCard';
import parseContentData from '../../utils/parseContentData'
import { showMessage } from 'react-native-flash-message';

const Message = () => {
    const [inputModalVisible, setInputModalVisible] = useState(false)
    const [contentList, setContentList] = useState([])

    useEffect(() => {
        database()
            .ref('message/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                //null olarak yakalarsa boş bir obje göndersin 
                const parsedData = parseContentData(contentData || {});
                setContentList(parsedData)
            });
    }, [])

    function handleInputToogle() {
        setInputModalVisible(!inputModalVisible)
    }

    function handleSendContent(content) {
        handleInputToogle();
        sendContent(content)
    }

    function sendContent(content) {
        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date()).toISOString(),
            dislike: 0,
        };
        database().ref('message/').push(contentObject)
    }

    function handleDislike(item) {
        database()
            .ref(`message/${item.id}/`)
            .update({ dislike: item.dislike + 1 })
    }
    const renderContent = ({ item }) => <MessageCard message={item} dislikeClick={() => handleDislike(item)} />
    return (
        <View style={styles.container}>
            <FlatList
                data={contentList}
                renderItem={renderContent}
            />
            <FloatingButton icon="plus" onPress={handleInputToogle} />
            <ContentInput visible={inputModalVisible}
                onClose={handleInputToogle}
                onSend={handleSendContent}
            />
        </View>
    )
}

export default Message;