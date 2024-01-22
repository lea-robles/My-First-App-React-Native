import { Image, View, Text, TouchableOpacity } from 'react-native'
import Card from '../Card'
import { FontAwesome } from '@expo/vector-icons'
import { styles } from './styles'
import { removeItem } from '../../features/cartSlice '
import { useDispatch } from 'react-redux'

const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    return (
        <Card style={styles.containerItem}>
            <Image
                style={styles.imagesCart}
                resizeMode='cover'
                source={{ uri: item.rutaImagen}}
            />
            <View>
                <Text style={styles.textTitle}>{item.name}</Text>
                <Text style={styles.text}>${item.price} c/u</Text>
                <Text style={styles.text}>
                    Cantidad: {item.quantity}, Total: ${item.quantity * item.price}
                </Text>
            </View>
            <TouchableOpacity style={styles.trashIcon} onPress={() => dispatch(removeItem(item))}>
                <FontAwesome name="trash-o" size={24} color={'black'} />
            </TouchableOpacity>
        </Card>
    )
}

export default CartItem
