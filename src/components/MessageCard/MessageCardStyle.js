import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f6f5f8',
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.05,
        elevation: 2,
    },

    inner_container: {
        flexDirection: 'row',
        minHeight: 25,
        justifyContent: 'space-between',
    },
    user: {
        color: 'black',
        padding: 10,
        fontSize: 12,
    },
    date: {
        color: 'black',
        padding: 10,
    },
    text: {
        color: 'black',
        paddingHorizontal: 10,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'flex-end',
        margin: 10,
    },
    dislike_container: {
        flexDirection: 'row',
        backgroundColor: colors.purple,
        padding: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        width: 100,
        height: 30,
    },
    dislike_text: {
        color: 'white',
        fontWeight: 'bold',
    },
    dislike_count_container: {
        backgroundColor: 'white',
        padding: 1,
        borderRadius: 20,
        marginRight: 5,
    },
    dislike_count_text: {
        color: 'black',
        fontWeight: 'bold',
    },
});
