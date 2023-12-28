import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import cartData from '../data/cart_data.json'
import CartItem from '../components/CartItem'
import { useEffect, useState } from 'react'

const CartScreen = () => {

  const [total, setTotal] = useState()

  useEffect(() => {
      const totalCount = cartData.reduce((accumulator, item) => (
        accumulator+= item.price*item.quantity
      ), 0)
      setTotal(totalCount)
  }, [])

  const renderCart = ({ item }) => (
    <CartItem item={item} />
  )

  return (
    <View>
      <FlatList
        data={cartData}
        renderItem={renderCart}
        keyExtractor={item => item.id}
      />
      <View style={styles.confirmView}>
        <Text style={styles.total}>Total: ${total} </Text>
        <TouchableOpacity style={styles.confirmButton} onPress={console.log('Button confirm press')}>
          <Text style={styles.confirmText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
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