import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import { colors } from '../global/colors'

const LogInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Input
        label= "Email:"
      />
      <Input
        label= "Contraseña:"
      />
      <TouchableOpacity style={styles.button} onPress={null}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <View style={styles.askContainer}>
        <Text style={styles.askText}>¿No tenes una cuenta?</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("SignUp")}}>
            <Text style={styles.logInText}>Crear mi cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LogInScreen

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