import React, { useState } from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'
import Card from '../Card'
import { colors } from '../../global/colors'
import { styles } from './styles'

const ProductItem = ({ product, navigation}) => {

    return (
        <Card style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Detalle del producto', product.id)} underlayColor={colors.primary}>
                <View style={styles.containerFlex}>
                <Text style={styles.Text}>{product.title}</Text>
                <Image
                    style={styles.productImage}
                    resizeMode='cover'
                    source={{ uri: product.thumbnail}}
                />
                </View>
            </TouchableOpacity>
        </Card>

    )
}

export default ProductItem