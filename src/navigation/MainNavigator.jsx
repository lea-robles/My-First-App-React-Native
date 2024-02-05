import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import AuthNavigator from "./AuthNavigator"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useGetProfilePictureQuery } from "../services/shopService"
import { setProfilePicture } from "../features/authSlice"
import { fetchSessions } from "../db"

const MainNavigator = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.localId)
  
    const {data, error, isLoading} = useGetProfilePictureQuery(user)

    useEffect(() => {
        if(data){
            dispatch(setProfilePicture(data.image))
        }
    },[data])

    useEffect(() => {
        (async () => {
            try{
                const sessionCall = await fetchSessions(localId)
                console.log('Session: ', sessionCall)
            }catch(message){
                console.log('Error sessionCall: ', error.message)
            }
        })()
    },[])

    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer >
    )
}

export default MainNavigator