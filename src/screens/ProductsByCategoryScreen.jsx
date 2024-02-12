import { FlatList, Text } from 'react-native'
import { ProductItem, Search, SpinnerLoading } from '../components'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ProductsByCategoryScreen = ({ navigation, route }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  const category = useSelector(state => state.shopReducer.categorySelected)

  const { data: productsFiltered, isLoading, error } = useGetProductsByCategoryQuery(category)


  useEffect(() => {
    if (!isLoading) {
      const productsValues = Object.values(productsFiltered)
      const productsFilteredSearch = productsValues.filter(
        product => product.name.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFilteredSearch)
    }
  }, [category, search, isLoading])

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  deleteSearch = () => {
    setSearch('')
  }

  return (
    <>
      {
        isLoading ?
          <SpinnerLoading />
          :
          <>
            <Search onSearchHandlerEvent={onSearch} searchDeleteEvent={deleteSearch} />
            <FlatList
              data={productsByCategory}
              renderItem={renderProductItem}
              keyExtractor={item => item.id}
              ListEmptyComponent={<Text>No hay productos para mostrar</Text>}
            />
          </>
      }
    </>
  )
}

export default ProductsByCategoryScreen