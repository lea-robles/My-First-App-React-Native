import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrderQuery } from '../services/shopService'
import { Error, SpinnerLoading } from '../components'
import { colors } from '../global/colors'


const OrdersScreens = () => {

    const { data: ordersData, isLoading, error, refetch } = useGetOrderQuery()

    const ordersArray = Object.entries(ordersData || {}).map(([key, value]) => {
        const updateAtNumber = parseInt(value.updateAt.replace(/,/g, ''), 10);
        return { ...value, id: key, updateAt: updateAtNumber };
    })

    const handleRefresh = () => {
        refetch()
    }

    if (isLoading) {
        return <SpinnerLoading />
    }

    if (error) {
        return <Error />
    }

    const renderOrders = ({ item }) => {
        const total = item.cartItems.reduce((accumulator, cartItem) => {
            return accumulator + cartItem.price * cartItem.quantity
        }, 0)

        const totalQuantity = item.cartItems.reduce((accumulator, cartItem) => {
            return accumulator + cartItem.quantity;
        },  0)
        return (
            <OrderItem order={item} total={total} quantity={totalQuantity}/>
        )
    }

    const hasOrders = ordersArray.length >  0

    return (
        <View style={styles.container}>
            {hasOrders ? (
                <FlatList
                    data={ordersArray}
                    renderItem={renderOrders}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom:   60  }}
                />
            ) : (
                <View style={styles.noOrdersContainer}>
                    <Text style={styles.noOrdersText}>No hay órdenes todavía.</Text>
                </View>
            )}      
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={handleRefresh}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrdersScreens

const styles = StyleSheet.create({
    textOrderClear: {
        fontSize: 18
    },
    container: {
        flex: 1,
        position: 'relative'
    },
    containerButton: {
        position: 'absolute',
        bottom: 15,
        right: 140
    },
    button: {
        padding: 10,
        backgroundColor: "#3F97C6",
        borderRadius: 10,
        marginTop: 18,
        paddingHorizontal: 20
    },
    buttonText: {
        color: colors.secondary,
        fontSize: 16,
        fontFamily: 'Roboto-bold'
    },
    noOrdersContainer: {
        flex:  1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:  20,
    },
    noOrdersText: {
        fontSize:  18,
        textAlign: 'center',
    }
})