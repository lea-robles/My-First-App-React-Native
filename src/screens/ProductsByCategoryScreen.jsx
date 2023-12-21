import { FlatList, Text } from 'react-native'
import products_data from '../data/products_data.json'
import { ProductItem, Search } from '../components'
import { useEffect, useState } from 'react'

const ProductsByCategoryScreen = ({ navigation, route }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  console.log('Route.params: ', route.params)
  const {category} = route.params

  useEffect(()=>{
    const productsFiltered = products_data.filter(product => product.category === category)
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