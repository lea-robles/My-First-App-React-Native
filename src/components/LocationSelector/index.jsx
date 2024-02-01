import { Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { styles } from './styles'

const LocationSelector = () => {
  const [location, setLocation] = useState()
  const [error, setError] = useState()

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
          </>
          :
          <View>
            <ActivityIndicator />
            <Text>Cargando...</Text>
          </View>
      }
    </View>
  )
}

export default LocationSelector

