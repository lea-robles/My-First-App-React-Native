import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from "../components"
import CartScreen from "../screens/CartScreen"

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return (
        <Stack.Navigator
                initialRouteName="Carrito"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation} showBackButton={navigation.canGoBack()}/>
                    })
                }
            >
                <Stack.Screen
                    name="Carrito"
                    component={CartScreen}
                />
            </Stack.Navigator>
    )
}

export default CartNavigator
