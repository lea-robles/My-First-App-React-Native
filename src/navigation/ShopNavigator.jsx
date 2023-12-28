import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from "../components"

import CategoriesScreen from '../screens/CategoriesScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
            <Stack.Navigator
                initialRouteName="Categorias"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation} showBackButton={navigation.canGoBack()}/>
                    })
                }
            >
                <Stack.Screen
                    name="Categorias"
                    component={CategoriesScreen}
                />
                <Stack.Screen
                    name="Productos"
                    component={ProductsByCategoryScreen}
                />
                <Stack.Screen
                    name="Detalle del producto"
                    component={ProductDetailScreen}
                />
            </Stack.Navigator>
    )
}

export default ShopNavigator