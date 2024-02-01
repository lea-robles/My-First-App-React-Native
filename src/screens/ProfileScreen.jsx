import { Image, Pressable, StyleSheet, View, Text } from 'react-native'
import { colors } from '../global/colors'
import user_data from '../data/user_data.json'
import { useSelector } from 'react-redux'
import { LocationSelector } from '../components'

const ProfileScreen = ({ navigation }) => {
    const image = useSelector(state => state.authReducer.profilePicture)

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
            <LocationSelector/>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    profilePicture: {
        width: 300,
        height: 300,
        borderRadius: 300,
        borderColor: 'black',
        borderWidth: 3,
    },
    userTitle: {
        fontFamily: 'Roboto-bold',
        fontSize: 35,
    },
    userDataContainer: {
        marginTop: 70,
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
    }
})