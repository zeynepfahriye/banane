import { StyleSheet } from "react-native";
const base_style = StyleSheet.create({
    container: {
        margin: 8,
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        height: 45,
        width: 250,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    }
})
export default {
    primary: StyleSheet.create({
        container: {
            ...base_style.container,
            backgroundColor: '#e0e0e0',
            borderColor: '#557B83'
        },
        title: {
            ...base_style.title,
            color: '#557B83'
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#557B83',
            borderColor: '#557B83'
        },
        title: {
            ...base_style.title,
            color: '#e0e0e0'
        },
    })
}