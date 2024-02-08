import { ActivityIndicator, StyleSheet, Text, View, StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import store from './src/store'
import MainNavigator from './src/navigation/MainNavigator'
import { init } from './src/db'

export default function App() {

  init()
    .then(() => console.log('DB en correcto funcionamiento'))
    .catch((error) => console.log('DB error:', error))

  const [fontLoaded] = useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-light': require('./assets/fonts/Roboto-Light.ttf')
  })

  if (!fontLoaded) return (
    <View style={styles.containerSpinner}>
      <ActivityIndicator style={styles.loadedSpinner} />
      <Text>Cargando...</Text>
    </View>
  )

  return (
    <Provider store={store}>
      <StatusBar />
      <MainNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadedSpinner: {
    paddingBottom: 15
  }
})