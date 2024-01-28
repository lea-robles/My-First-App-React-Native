import { Image, Pressable, StyleSheet, View, Text } from 'react-native'
import { colors } from '../global/colors'
import { useState } from 'react'
import user_data from '../data/user_data.json'

const ProfileScreen = ({navigation}) => {
    const [image, setImage] = useState(null)

    return (
        <View style={styles.container}>
            <View>
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
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 20,
        gap: 20,
        justifyContent:'space-around'
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    userTitle: {
        fontFamily: 'Roboto-bold',
        fontSize: 25,
    },
    userDataContainer: {
        marginTop: 10
    },
    userData: {
        fontFamily: 'Roboto-regular',
        fontSize: 15
    },
    imgContainer: {
        borderRadius: 100
    }
})