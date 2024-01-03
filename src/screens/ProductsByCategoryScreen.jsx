import { FlatList, Text } from 'react-native'
import { ProductItem, Search } from '../components'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProductsByCategoryScreen = ({ navigation, route }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  const category = useSelector(state => state.shopReducer.categorySelected)
  const productsFiltered = useSelector(state => state.shopReducer.productsFilteredByCategory)
  useEffect(()=>{
    const productsFilteredSearch = productsFiltered.filter(
      product => product.title.toLowerCase().includes(search.toLowerCase())
    )
    setProductsByCategory(productsFilteredSearch)
  },[category, search])

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation}/>
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  deleteSearch = () => {
    setSearch('')
  }

  return (
    <>
      <Search onSearchHandlerEvent={onSearch} searchDeleteEvent={deleteSearch}/>
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>No hay productos para mostrar</Text>}
      />
    </>
  )
}

export default ProductsByCategoryScreen