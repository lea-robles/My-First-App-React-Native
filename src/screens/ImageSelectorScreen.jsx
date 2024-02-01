import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../global/colors'
import * as ImagePicker from 'expo-image-picker'
import { setProfilePicture } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePutProfilePictureMutation } from '../services/shopService'

const ImageSelectorScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const localId = useSelector(state => state.authReducer.localId)
  const imageFromRedux = useSelector(state => state.authReducer.profilePicture)
  const [image, setImage] = useState(imageFromRedux || '')
  
  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      return false
    }
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2
      })
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    } else {
      console.log("No se han otorgado permisos para usar la cámara")
    }
  }

  const [triggerSaveProfilePic, result] = usePutProfilePictureMutation()

  const confirmImage = () => {
    dispatch(setProfilePicture(image))
    triggerSaveProfilePic({ image, localId })
    navigation.navigate('Perfil')
  }
  return (
    <View style={styles.container}>
      {
        image ?
          <View style={styles.containerImage}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode='cover'
            />
            <View style={styles.buttonContainer} >
              <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.textButton}>Tomar otra foto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.button, ...styles.buttonConfirm }} onPress={confirmImage}>
                <Text style={styles.textButton}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={styles.noPhoto}>
            <MaterialIcons name='no-photography' size={250} color='#ccc' />
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.textButton}>Abrir cámara</Text>
            </TouchableOpacity>
          </View>
      }
    </View>
  )
}

export default ImageSelectorScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    backgroundColor: '#1583C2',
    paddingVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 30
  },
  buttonConfirm: {
    backgroundColor: '#4FD586',
    marginHorizontal: 10,
    paddingHorizontal: 46,
  },
  noPhoto: {
    marginTop: 100,
    alignItems: 'center'
  },
  textButton: {
    fontFamily: 'Roboto-bold',
    fontSize: 18,
    color: colors.secondary
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
  },
  containerImage: {
    alignItems: 'center',
    marginTop: 30
  }
})