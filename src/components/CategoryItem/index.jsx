import { Text, TouchableOpacity } from 'react-native'
import Card from '../Card'
import { styles } from './styles'

const CategoryItem = ({ category, navigation}) => {

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Productos", {category})} >
        <Text style={styles.text}>{category}</Text>
      </TouchableOpacity>
    </Card>
  )
}

export default CategoryItem

