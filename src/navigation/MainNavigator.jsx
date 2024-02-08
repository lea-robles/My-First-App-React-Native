import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import AuthNavigator from "./AuthNavigator"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useGetProfilePictureQuery } from "../services/shopService"
import { setProfilePicture, setUser} from "../features/authSlice"
import { fetchSessions } from "../db"

const MainNavigator = () => {
    const dispatch = useDispatch()
    const userLogged = useSelector(state => state.authReducer.localId)

    const { data, error, isLoading } = useGetProfilePictureQuery(userLogged)

    useEffect(() => {
        if (data) {
            dispatch(setProfilePicture(data.image))
        }
    }, [data])

    
    useEffect(() => {
        (async () => {
            try {
                const sessionCall = await fetchSessions()
                console.log('Session: ', sessionCall)
                if (sessionCall?.rows.length) {
                    console.log("Se han encontrado datos de usuario")
                    const user = sessionCall.rows._array[0]
                    dispatch(setUser(user))
                    console.log("Console log de user ", user)
                }
            } catch (error) {
                console.log('Error sessionCall: ', error.message)
                console.log('userLogged: ',userLogged)
            }
        })()
    }, [])

    return (
        <NavigationContainer>
            {userLogged && !isLoading ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer >
    )
}

export default MainNavigator