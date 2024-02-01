import { Text, View, ActivityIndicator, StyleSheet} from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { MapPreview } from '../components'


const LocationScreen = () => {
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('No se otorgaron los permisos necesarios')
        return
      }
      let getLocation = await Location.getCurrentPositionAsync()
      setLocation({ latitude: getLocation.coords.latitude, longitude: getLocation.coords.longitude })
    })()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Mi ubicación</Text>
      {
        location.latitude
          ?
          <>
          <Text style={styles.textDate}>
            Latitud: {location.latitude} || longitud: {location.longitude}
          </Text>
          <MapPreview location={location}/>
          </>
          :
          <View style={styles.spinnerContainer}>
            <ActivityIndicator />
            <Text>Cargando...</Text>
          </View>
      }
    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      marginTop: 20
  },
  spinnerContainer: {
      alignItems: 'center',
      marginTop: 200
  },
  textTitle: {
      marginTop: 10,
      fontFamily: 'Roboto-bold',
      fontSize: 25
  },
  textDate: {
      marginTop: 25,
      fontFamily: 'Roboto-regular',
      fontSize: 16
  },
})
