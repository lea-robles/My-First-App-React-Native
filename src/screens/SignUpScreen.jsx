import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { signUpReports } from '../../validations/signUpReports'

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const [triggerSignUp, result] = useSignUpMutation()

  const dispatch = useDispatch()

  const onSubmit = () => {
    setEmailError('')
    setPasswordError('')
    setConfirmPasswordError('')
    try {
      signUpReports.validateSync({ email, password, confirmPassword }, { abortEarly: false })
    } catch (error) {
      error.errors.map(e => {
        console.log(Object.keys(e)[0])
        const customError = Object.values(e)[0]
        switch (Object.keys(e)[0]) {
          case 'empty_email':
            setEmailError(customError)
          case 'invalid_email':
            setEmailError(customError)
          case 'empty_password':
            setPasswordError(customError)
          case 'invalid_password':
            setPasswordError(customError)
          case 'invalid_confirm_password':
            setConfirmPasswordError(customError)
          case 'invalid_match_password':
            setConfirmPasswordError(customError)
          default:
            break
        }

      })
    }
    triggerSignUp({ email, password })
    console.log('result: ', result)
  }

  useEffect(() => {
    result.data && dispatch(setUser(result.data))
  }, [result])

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <Input
        label="Email:"
        onChange={setEmail}
        error={emailError}
      />
      <Input
        label="Contraseña:"
        onChange={setPassword}
        isSecureEntry={true}
        error={passwordError}
      />
      <Input
        label="Repetir Contraseña"
        onChange={setConfirmPassword}
        isSecureEntry={true}
        error={confirmPasswordError}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>
      <View style={styles.askContainer}>
        <Text style={styles.askText}>¿Ya tenes una cuenta registrada?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("LogIn") }}>
          <Text style={styles.logInText}>Ingresar a mi cuenta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  askText: {
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