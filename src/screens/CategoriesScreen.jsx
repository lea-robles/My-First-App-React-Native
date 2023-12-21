import { FlatList } from 'react-native'
import { CategoryItem } from '../components'
import categories_data from '../data/categories_data.json'

const CategoriesScreen = ({ navigation }) => {

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <>
      <FlatList
        data={categories_data}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
      />
    </>
  )
}

export default CategoriesScreen