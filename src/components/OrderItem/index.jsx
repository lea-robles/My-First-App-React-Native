import { Text, TouchableOpacity, View } from 'react-native'
import Card from '../Card'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'

const OrderItem = ({ order, total }) => {
  return (
    <Card style={styles.containerOrder}>
      <View>
        <Text>
          Orden creade el {new Date(order.createAt).toLocaleString()}
        </Text>
        <Text>
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

