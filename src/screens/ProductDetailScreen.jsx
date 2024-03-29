import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { useGetProductByIdQuery } from '../services/shopService'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cartSlice '
import { SpinnerLoading } from '../components'
import Toast from 'react-native-toast-message'

const ProductDetailScreen = ({ route }) => {

  const [productSelect, setProductSelect] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const showToast = (type, message) => {
    Toast.show({
      type: type,
      position: 'bottom',
      text1: message,
      visibilityTime: 1000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 58,
      text1Style: {
        textAlign: 'center',
        fontSize: 20
      }
    })
  }

  const productId = route.params.id
  
  const { data: product, isFetching } = useGetProductByIdQuery(String(productId))
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (product) {
      const productsArray = Object.values(product);
      setProductSelect(productsArray[0]);
      setIsLoading(false);
    }
  }, [product])
  
  const addToCart = () => {
    dispatch(addItem({...productSelect, quantity: 1}))
    showToast('success', 'Añadido al carrito!')
  }

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
        <TouchableOpacity style={styles.buttonBuy} onPress={addToCart}>
          <Text style={styles.textButton}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  )


  return (
    <>
      {
        isLoading || isFetching
          ?
          <SpinnerLoading/>
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
