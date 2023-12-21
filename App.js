import { ActivityIndicator, StyleSheet, Text, View, StatusBar} from 'react-native'
import { useFonts } from 'expo-font'
import { useState } from 'react'
import Navigator from './src/navigation/Navigator'

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [productSelected, setProductSelected] = useState(null)

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

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onProducSelect = (id) => {
    setProductSelected(id)
  }

  return (
    <>
    <StatusBar/>
    <Navigator/>
    </>
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