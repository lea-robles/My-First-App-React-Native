import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import { colors } from '../global/colors'

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Input
        label= "Email:"
      />
      <Input
        label= "Contraseña:"
      />
      <Input
        label= "Repetir Contraseña"
      />
      <TouchableOpacity style={styles.button} onPress={null}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>
      <View style={styles.askContainer}>
        <Text style={styles.askText}>¿Ya tenes una cuenta registrada?</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("LogIn")}}>
            <Text style={styles.logInText}>Ingresar a mi cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: "#3F97C6",
    borderRadius: 10,
    margin: 5
  },
  buttonText: {
    color: colors.secondary
  },
  logInText: {
    color: colors.secondary,
    fontSize: 11,
    textDecorationLine: 'underline'
  },
  askText:{
    color: colors.secondary,
    fontSize: 13
  },
  askContainer: {
    gap: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margiTop: 50
  }
})