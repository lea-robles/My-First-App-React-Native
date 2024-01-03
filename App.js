import { ActivityIndicator, StyleSheet, Text, View, StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator'
import { Provider } from 'react-redux'
import store from './src/store'

export default function App() {

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
      <TabNavigator />
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