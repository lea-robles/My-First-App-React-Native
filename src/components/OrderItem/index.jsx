import { Text, TouchableOpacity, View } from 'react-native'
import Card from '../Card'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'
import { stopLocationUpdatesAsync } from 'expo-location'

const OrderItem = ({ order, total, quantity}) => {

  const formattedDate = new Date(order.updateAt).toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })

  return (
    <Card style={styles.containerOrder}>
      <View>
        <Text style={styles.textDate}>
          Orden creada el {formattedDate}
        </Text>
        <Text style={styles.numbers}>
          Unidades: {quantity} {'\n'}
          Total: ${total}
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.search}>
          <Ionicons name="md-search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </Card>
  )
}

export default OrderItem

