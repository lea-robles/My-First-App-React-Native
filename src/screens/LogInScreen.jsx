import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import Input from '../components/Input'
import { useLogInMutation } from '../services/authService'
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { signUpReports } from '../../validations/signUpReports'
import { insertSession } from '../db'

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [gralError, setGralError] = useState('')
  const [triggerLogIn, result] = useLogInMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    setEmailError('')
    setPasswordError('')
    try {
      signUpReports.validateSync({ email, password }, { abortEarly: false })
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
          default:
            break
        }

      })
    }
    triggerLogIn({ email, password })
    console.log('result: ', result)
    if(result.status == 'rejected') {
      console.log('Email o contrasenña incorrecta')
      setGralError('Email o contrasenña incorrecta')
    }
  }


  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data))
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      })
      .then(result => console.log('Usuario insertado: ', result))
      .catch(error => console.log('Error, usuario no insertado: ', error))
    }
  }, [result])

  return (
    <View style={styles.container}>
      <Input
        label="Email:"
        onChange={setEmail}
        error={emailError}
      />
      <Input
        label="Contraseña:"
        onChange={setPassword}
        isSecureEntry={true}
        error={passwordError || gralError}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <View style={styles.askContainer}>
        <Text style={styles.askText}>¿No tenes una cuenta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
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