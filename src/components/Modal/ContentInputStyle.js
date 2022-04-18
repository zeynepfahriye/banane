import { StyleSheet, Dimensions } from "react-native"
const deviceSize = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        marginHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: deviceSize / 3,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    inputContainer: {
        flex: 1
    }

})