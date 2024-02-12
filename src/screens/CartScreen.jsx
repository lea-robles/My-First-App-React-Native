import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'
import { clearCart } from '../features/cartSlice '
import Toast from 'react-native-toast-message'

const CartScreen = () => {

  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)

  const [post, result] = usePostOrderMutation()

  const showToast = (type, message) => {
    Toast.show({
      type: type,
      position: 'bottom',
      text1: message,
      visibilityTime:  4000,
      autoHide: true,
      topOffset:  30,
      bottomOffset:  40,
      text1Style: {
        textAlign: 'center',
        fontSize: 15
      }
    })
  }

  const confirmCart = () => {
    if (total != 0) {
      post({ total, cartItems, user: 'Leandro Robles', updateAt: Date.now().toLocaleString() })
      dispatch(clearCart(cartItems))
      showToast('success', 'Orden de compra enviada!')
    } else {
      showToast('error', 'Primero agregue productos al carrito')
    }
  }

  const renderCart = ({ item }) => (
    <CartItem item={item} />
  )

  return (
    <>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View>
        <FlatList
          data={cartItems}
          renderItem={renderCart}
          keyExtractor={item => item.id}
        />
        <View style={styles.confirmView}>
          <Text style={styles.total}>Total: ${total} </Text>
          <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
            <Text style={styles.confirmText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  confirmView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
  total: {
    fontFamily: 'Roboto-bold',
    fontSize: 18,
    paddingVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  confirmText: {
    fontFamily: 'Roboto-bold',
    fontSize: 18
  },
  confirmButton: {
    backgroundColor: '#1583C2',
    paddingVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 20,
  }
})