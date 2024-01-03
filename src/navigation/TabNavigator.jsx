import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import { colors } from '../global/colors'
import { MaterialCommunityIcons, Fontisto, Ionicons } from '@expo/vector-icons'
import OrdersStack from '../screens/OrdersScreens'
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import OrdersNavigator from './OrdersNavigator'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen name='ShopStack' component={ShopNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Fontisto name="shopping-store" size={24} color={focused? colors.secondary : '#ccc'} />
                        )
                    }}
                />
                <Tab.Screen name='CartStack' component={CartNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="cart" size={24} color={focused? colors.secondary : '#ccc'}/>
                        )
                    }}
                />
                <Tab.Screen name='OrdersStack' component={OrdersNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Ionicons name="ios-newspaper-sharp" size={24} color={focused? colors.secondary : '#ccc'}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary
    },
})