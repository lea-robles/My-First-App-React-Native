import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from '../components'
import OrdersScreens from '../screens/OrdersScreens'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Ordenes'
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation}/>
                })
            }
        >
            <Stack.Screen
                name='Ordenes'
                component={OrdersScreens}
            />

        </Stack.Navigator>

    )
}

export default OrdersNavigator

const styles = StyleSheet.create({})