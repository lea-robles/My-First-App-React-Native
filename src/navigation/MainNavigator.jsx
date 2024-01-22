import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import AuthNavigator from "./AuthNavigator"

const MainNavigator = () => {

    const user = ''

    return (
        <NavigationContainer>
            {user ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer >
    )
}

export default MainNavigator