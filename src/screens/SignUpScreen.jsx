import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useSignUpMutation } from '../services/authService'

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [triggerSignUp, result] = useSignUpMutation()

  const onSubmit = () => {
    triggerSignUp({email, password})
    console.log('result: ',result)
  }

  return (
    <View style={styles.container}>
      <Input
        label= "Email:"
        onChange={setEmail}
      />
      <Input
        label= "Contraseña:"
        onChange={setPassword}
        isSecureEntry={true}
        />
      <Input
        label= "Repetir Contraseña"
        onChange={setConfirmPassword}
        isSecureEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
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