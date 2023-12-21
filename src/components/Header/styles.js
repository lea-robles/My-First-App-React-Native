import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

export const styles = StyleSheet.create({
    headerContainer: {
      height: 100,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.primary,
      paddingHorizontal: 20
    },
    headerTitle: {
      color: colors.secondary,
      fontFamily: "Roboto-bold",
      fontSize: 25
    },
    home: {
    color: colors.secondary,
    }
  })