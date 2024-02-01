import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { MapPreview } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { usePutUserLocationMutation } from '../services/shopService'
import { setUserLocation } from '../features/authSlice'
import { colors } from '../global/colors'

const maps_api_key = process.env.EXPO_PUBLIC_MAPS_API_KEY


const LocationScreen = () => {
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')
  const [address, setAddress] = useState('')
  const localId = useSelector(state => state.authReducer.localId)
  const dispatch = useDispatch()
  const [triggerPutUserLocation, result] =  usePutUserLocationMutation()

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

  useEffect(() => {
    (async () => {
        try {
            if(location.longitude){
                const urlReverseGeoCode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${maps_api_key}`
                const response = await fetch(urlReverseGeoCode)
                const data = await response.json()
                const formattedAddress = await data.results[0].formatted_address
                setAddress(formattedAddress)
            }
        }
        catch(error){
            setError(error.message)
        }
    }) ()
  },[location])

  const onConfirm = () => {
    const locationRefresh = {
        latitude: location.latitude,
        longitude: location.longitude,
        address: address
    }
    dispatch(setUserLocation(locationRefresh))
    triggerPutUserLocation({ location: locationRefresh, localId } )
  }

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
          <Text style={styles.textAddress}>Dirección: {address}</Text>
          <MapPreview location={location}/>
          <TouchableOpacity style={styles.button} onPress={onConfirm}>
                <Text style={styles.buttonText}>Actualizar ubicación</Text>
          </TouchableOpacity>
          </>
          :
          <View style={styles.spinnerContainer}>
            <ActivityIndicator style={styles.spinner} />
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
      fontFamily: 'Roboto-light',
      fontSize: 15
  },
  spinner: {
    margin: 18
  },
  textAddress: {
    marginHorizontal: 5,
    marginTop: 18,
    fontFamily: 'Roboto-regular',
    fontSize: 17
  },
  button: {
    padding: 10,
    backgroundColor: "#3F97C6",
    borderRadius: 10,
    marginTop: 18
  },
  buttonText: {
    color: colors.secondary
  },
})
