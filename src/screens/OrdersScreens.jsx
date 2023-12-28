import { FlatList, StyleSheet, Text, View } from 'react-native'
import orders_data from '../data/orders_data.json'
import OrderItem from '../components/OrderItem'

const OrdersScreens = () => {

    const renderOrders = ({item}) => {
        const total = item.items.reduce((accumulator, item) => (
            accumulator+= item.price*item.quantity
        ),0)
        return(
            <OrderItem order={item} total={total}/>
        )
    }

  return (
    <FlatList
        data={orders_data}
        renderItem={renderOrders}
        keyExtractor={item=>item.id}
    />
  )
}

export default OrdersScreens

const styles = StyleSheet.create({})