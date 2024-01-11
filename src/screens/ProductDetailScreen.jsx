import { Text, View, ActivityIndicator, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { useGetProductByIdQuery } from '../services/shopService'

const ProductDetailScreen = ({ route }) => {

  const [productSelect, setProductSelect] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const productId = route.params.id

  const { data: product, isFetching } = useGetProductByIdQuery(String(productId))

  console.log('Datos del producto:', product)

  useEffect(() => {
    if (product) {
      const productsArray = Object.values(product);
      setProductSelect(productsArray[0]);
      setIsLoading(false);
    }
   }, [product]);

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.containerImage}>
        <Image
          style={styles.productImage}
          resizeMode='cover'
          source={{ uri: item.rutaImagen }}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <Text style={styles.textPrice}>${item.price}</Text>
        <Text style={styles.textDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={styles.textButton}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <>
      {
        isLoading || isFetching
          ?
          <View>
            <ActivityIndicator />
            <Text>Cargando...</Text>
          </View>
          :
          <View>
            <FlatList
              data={[productSelect]}
              keyExtractor={(item) => String(item.id)}
              renderItem={renderItem}
            />
          </View>
      }
    </>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  productImage: {
    width: 300,
    height: 300
  },
  containerImage: {
    margin: 30,
    alignItems: 'center'
  },
  containerText: {
    alignItems: 'center',
    margin: 5
  },
  textTitle: {
    fontFamily: 'Roboto-bold',
    textTransform: 'capitalize',
    fontSize: 35,
    margin: 5
  },
  textPrice: {
    fontFamily: 'Roboto-regular',
    fontSize: 28,
    margin: 5
  },
  textDescription: {
    fontFamily: 'Roboto-regular',
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 4
  },
  buttonBuy: {
    backgroundColor: '#1583C2',
    paddingVertical: 8,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  }
})
