import { Image, Pressable, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import user_data from '../data/user_data.json'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { clearUser } from '../features/authSlice'

const ProfileScreen = ({ navigation }) => {
    const image = useSelector(state => state.authReducer.profilePicture)
    const email = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()

    const onLogOut = () => {
        dispatch(clearUser())
    }

    return (
        <>
            <View style={styles.imageContainer}>
                <Pressable onPress={() => navigation.navigate('Seleccionar imagen')}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? colors.secondary : '#ccc'
                        },
                        styles.imgContainer
                    ]}>
                    {
                        image ?
                            <Image
                                source={{ uri: image }}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                source={require('../../assets/img/user.png')}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />
                    }
                </Pressable>
            </View>
            <View style={styles.userDataContainer}>
                <Text style={styles.userTitle}>{user_data.name}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>Nivel: {user_data.level}</Text>
                <Text style={styles.userData}>Dirección: {user_data.address}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>
            </View>
            {
                email
                &&
                <TouchableOpacity style={styles.logOutContainer} onPress={onLogOut}>
                    <MaterialCommunityIcons name="logout" size={30} color="black" />
                    <Text style={styles.logOutText}>Cerrar Session</Text>
                </TouchableOpacity>
            }
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    profilePicture: {
        width: 250,
        height: 250,
        borderRadius: 200,
        borderColor: 'black',
        borderWidth: 3,
    },
    userTitle: {
        fontFamily: 'Roboto-bold',
        fontSize: 35,
    },
    userDataContainer: {
        marginTop: 50,
        alignItems: 'flex-start',
        marginHorizontal: 20
    },
    userData: {
        fontFamily: 'Roboto-regular',
        fontSize: 20
    },
    imgContainer: {
        borderRadius: 200
    },
    imageContainer: {
        margin: 10,
        alignItems: 'center',
        marginTop: 40
    },
    logOutContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center'
    },
    logOutText: {
        fontSize: 24,
        fontFamily: 'Roboto-bold'
    }
})