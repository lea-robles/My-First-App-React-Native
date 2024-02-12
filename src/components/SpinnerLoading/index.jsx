import { View, Text, ActivityIndicator } from 'react-native'
import styles from './styles'

const SpinnerLoading = () => {
    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator style={styles.spinner} />
            <Text>Cargando...</Text>
        </View>
    )
}

export default SpinnerLoading

