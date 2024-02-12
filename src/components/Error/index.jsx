import { View, Text } from 'react-native'
import { styles } from './styles'

const Error = (err) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}> Error al cargar  :({'\n'}  Intente reiniciar</Text>
            </View>
        </View>
    )
}

export default Error