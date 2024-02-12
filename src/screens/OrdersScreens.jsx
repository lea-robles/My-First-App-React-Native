import { FlatList, StyleSheet, View } from 'react-native'
import orders_data from '../data/orders_data.json'
import OrderItem from '../components/OrderItem'
import { useGetOrderQuery } from '../services/shopService'
import { Error, SpinnerLoading } from '../components'
import { ErrorToast } from 'react-native-toast-message'

const OrdersScreens = () => {

    const { data: orders, isLoading, error } = useGetOrderQuery()

    if (isLoading) {
        return <SpinnerLoading/>
    }

    if (error) {
        return <Error/>
    }

    const renderOrders = ({ item }) => {
        const total = item.items.reduce((accumulator, item) => (
            accumulator += item.price * item.quantity
        ), 0)
        return (
            <OrderItem order={item} total={total} />
        )
    }

    return (
        <View>
            <FlatList
                data={orders}
                renderItem={renderOrders}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default OrdersScreens

const styles = StyleSheet.create({})