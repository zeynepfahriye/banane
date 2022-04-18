import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './MessageCardStyle'
import { formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'
const MessageCard = ({ message, dislikeClick }) => {
    const formatedDate = formatDistance(parseISO(message.date), new Date(), { addSuffix: true, locale: tr, })
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.inner_container}>
                    <Text style={styles.user}>{message.username}</Text>
                    <Text style={styles.date} >{formatedDate}</Text>
                </View>
                <Text style={styles.title}>{message.text}</Text>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.dislike_container} onPress={dislikeClick}>
                        {!!message.dislike && (
                            <View style={styles.dislike_count_container}>
                                <Text style={styles.dislike_count_text}>{message.dislike}</Text>
                            </View>
                        )}
                        <Text style={styles.dislike_text}>Dislike</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default MessageCard;