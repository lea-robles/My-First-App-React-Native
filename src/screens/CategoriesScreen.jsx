import { FlatList } from 'react-native'
import { CategoryItem, SpinnerLoading, Error } from '../components'
import { useGetCategoriesQuery } from '../services/shopService'

const CategoriesScreen = ({ navigation }) => {
  const { data, isLoading, error } = useGetCategoriesQuery()

  const renderContent = () => {
    if (isLoading) {
      return <SpinnerLoading />
    }
    if (error) {
      return <Error/>
    }
    return (
      <FlatList
        data={data}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
      />
    )
  }

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  );

  return (
    <>
      {renderContent()}
    </>
  )
}

export default CategoriesScreen