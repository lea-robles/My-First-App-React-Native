import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from '../components'
import SignUpScreen from '../screens/SignUpScreen'
import LogInScreen from '../screens/LogInScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='LogIn'
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} showBackButton={navigation.canGoBack()} showHomeButton={false}/>
                })
            }
        >
            <Stack.Screen
                name='SignUp'
                component={SignUpScreen}
            />
            <Stack.Screen
                name='LogIn'
                component={LogInScreen}
            />

        </Stack.Navigator>
    )
}

export default AuthNavigator

const styles = StyleSheet.create({})