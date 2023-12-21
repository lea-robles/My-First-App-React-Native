import { TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { styles } from './styles'

const Search = ({ onSearchHandlerEvent, searchDeleteEvent }) => {

    const [searchInput, setSearchInput] = useState('')

    const deleteInput = () => {
        setSearchInput('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setSearchInput}
                style={styles.input}
                placeholder='Buscar...'
                value={searchInput}
            />
            <TouchableOpacity onPress={() => onSearchHandlerEvent(searchInput)}>
                <Ionicons style={styles.search} name="search" size={24} color="#646464" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => searchDeleteEvent()} onPressOut={() => deleteInput()}>
                <Entypo style={styles.cross} name="cross" size={24} />
            </TouchableOpacity>
        </View>
    )
}

export default Search