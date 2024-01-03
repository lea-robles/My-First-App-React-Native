import { FlatList } from 'react-native'
import { CategoryItem } from '../components'

import { useSelector } from 'react-redux'

const CategoriesScreen = ({ navigation }) => {

  const categories = useSelector(state => state.shopReducer.categories)

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
      />
    </>
  )
}

export default CategoriesScreen