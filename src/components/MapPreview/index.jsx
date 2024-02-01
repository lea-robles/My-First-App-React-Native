import { Image, View } from 'react-native'
import { styles } from './styles'

const maps_api_key = process.env.EXPO_PUBLIC_MAPS_API_KEY

const MapPreview = ({location}) => {
  return (
    <View style={styles.mapContainer}>
      <Image
        style={styles.mapImage}
        source= {{uri: `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=300x300&maptype=roadmap&markers=color:red%7Clabel:I%7C${location.latitude},${location.longitude}&key=${maps_api_key}`}}
      />
    </View>
  )
}

export default MapPreview

