import { StyleSheet } from "react-native"
import { colors } from '../../global/colors'

export const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      margin: 7,
      padding: 15
    },
    text: {
      textTransform: 'capitalize',
      fontFamily: 'Roboto-regular'
    }
  })