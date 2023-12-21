import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { colors } from "../global/colors"

import CategoriesScreen from '../screens/CategoriesScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'
import { Header } from "../components"

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
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
        </NavigationContainer>
    )
}

export default Navigator