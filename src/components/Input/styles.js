import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        maxWidth: '70%'
    },
    input: {
        borderColor: colors.primary,
        backgroundColor: colors.primaryBack,
        padding: 7,
        width: 260,
        color: 'black',
        borderWidth: 1,
        borderRadius: 8,
        margin: 8,
    },
    errorMessage: {
        color: colors.secondary,
        padding: 8,
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    label: {
        color: colors.secondary
    }
})