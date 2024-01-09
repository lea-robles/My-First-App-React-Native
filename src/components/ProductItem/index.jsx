import { Text, Image, TouchableOpacity, View } from 'react-native'
import Card from '../Card'
import { colors } from '../../global/colors'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../../features/shopSlice'

const ProductItem = ({ product, navigation}) => {

    const dispatch = useDispatch()

    return (
        <Card style={styles.container}>
            <TouchableOpacity onPress={() =>{
                dispatch(setProductIdSelected(product.id)) 
                navigation.navigate('Detalle del producto', product.id)
            }
                } underlayColor={colors.primary}>
                <View style={styles.containerFlex}>
                <Text style={styles.Text}>{product.name}</Text>
                {/* <Image
                    style={styles.productImage}
                    resizeMode='cover'
                    source={{ uri: product.thumbnail}}
                /> */}
                </View>
            </TouchableOpacity>
        </Card>

    )
}

export default ProductItem