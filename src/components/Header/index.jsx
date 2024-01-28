import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../../global/colors'

const Header = ({ title, navigation, showBackButton, showHomeButton}) => {
  return (
    <View style={styles.headerContainer}>
      {showBackButton && (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="arrow-back-outline" size={24} color={colors.secondary} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      {showHomeButton && (
        <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
          <AntDesign style={styles.home} name={"home"} size={30} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Header