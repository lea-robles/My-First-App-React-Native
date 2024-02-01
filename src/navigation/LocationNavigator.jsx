import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from "../components"
import LocationScreen from "../screens/LocationScreen"

const Stack = createNativeStackNavigator()

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
                initialRouteName="Ubicación"
                screenOptions={
                    ({ navigation, route }) => ({
                        header: () => <Header title={route.name} navigation={navigation} showBackButton={navigation.canGoBack()} showHomeButton={true}/>
                    })
                }
            >
                <Stack.Screen
                    name="Mapa"
                    component={LocationScreen}
                />
            </Stack.Navigator>
    )
}

export default ProfileNavigator
