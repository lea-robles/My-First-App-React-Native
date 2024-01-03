import { Text, TouchableOpacity } from 'react-native'
import Card from '../Card'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/shopSlice'

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Productos", { category })
        dispatch(setCategorySelected(category))
      }
      }>
        <Text style={styles.text}>{category}</Text>
      </TouchableOpacity>
    </Card>
  )
}

export default CategoryItem

