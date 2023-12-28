import { Image, View, Text, TouchableOpacity } from 'react-native'
import Card from '../Card'
import { FontAwesome } from '@expo/vector-icons'
import { styles } from './styles'

const CartItem = ({ item }) => {

    return (
        <Card style={styles.containerItem}>
            <Image
                style={styles.imagesCart}
                resizeMode='cover'
                source={{ uri: item.images[0] }}
            />
            <View>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.text}>${item.price} c/u</Text>
                <Text style={styles.text}>
                    Cantidad: {item.quantity}, Total: ${item.quantity * item.price}
                </Text>
            </View>
            <TouchableOpacity style={styles.trashIcon}>
                <FontAwesome name="trash-o" size={24} color={'black'} />
            </TouchableOpacity>
        </Card>
    )
}

export default CartItem