
import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 30,
        padding: 3,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#e0e0e0',
        backgroundColor: '#e0e0e0',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        color: 'black',
        padding: Platform.OS === 'android' ? 0 : 3
    },


})