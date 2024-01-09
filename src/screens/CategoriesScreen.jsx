import { FlatList } from 'react-native'
import { CategoryItem } from '../components'
import { useGetCategoriesQuery } from '../services/shopService'

const CategoriesScreen = ({ navigation }) => {

  const {data, isLoading, error} = useGetCategoriesQuery()

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
      />
    </>
  )
}

export default CategoriesScreen