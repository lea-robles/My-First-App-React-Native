import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        backgroundColor: colors.secondary,
    },
    containerFlex: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Text: {
        fontFamily: 'Roboto-regular',
        textTransform: 'capitalize',
    },
    productImage: {
        width: 50,
        height: 50
    }
})