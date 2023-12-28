import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    imagesCart: {
        width: 80,
        height: 80
    },
    containerItem: {
        flexDirection: 'row',
        marginVertical: 7,
        marginHorizontal: 5,
        padding: 20,
        borderColor: '#ccc',
        alignItems: 'center'
    },
    textTitle: {
        textTransform: 'capitalize',
        marginLeft: 25,
        fontFamily: 'Roboto-bold',
        fontSize: 16
    },
    text: {
        textTransform: 'capitalize',
        marginLeft: 25,
        fontFamily: 'Roboto-regular',
        fontSize: 16
    },
    trashIcon: {
        marginLeft: 30
    }
})