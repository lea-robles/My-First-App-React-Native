import { useState } from "react"
import { Text, View, TextInput } from "react-native"
import { styles } from './styles'

const Input = ({ label, isSecureEntry = false, error}) => {
    const [input, setInput] = useState()

    const handleChangeText = (text) => {
        setInput(text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleChangeText}
                secureTextEntry={isSecureEntry}
                value={input}
            />
            {error && <Text style={styles.errorMessage}>{error}</Text>}
        </View>
    )
}

export default Input