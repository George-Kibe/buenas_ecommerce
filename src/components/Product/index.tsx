import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

interface ProductItemProps{
  product:{
    id:string;
    title:string;
    image?:string;
    avgRating:number;
    availableNumber?:number,
    ratings:number;
    price:number;
    oldPrice?:number;
  }
}
const Product = ({product}:ProductItemProps) => {
  const navigation = useNavigation()
  const productPressed = () =>{
    navigation.navigate("Product Details", {id: product.id})
  }
  return (
    <TouchableOpacity onPress={productPressed} style={styles.root}>
        <Image style={styles.image} source={{ uri:product.image}}/>
    
        <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={3}
            >{product.title}</Text>
            <View style={styles.ratings}>
                {
                  [0,0,0,0,0].map((element, index) =>
                  <FontAwesome style={styles.star}
                      key={`${product.id}-${index}`}
                      name={index < Math.floor(product.avgRating) ? "star" : "star-o"}
                      size={20}
                      color={"#e47911"}/>
                  )
                }
                <Text> {product.ratings}</Text>
            </View>
            <Text style={styles.price}>
                From Kshs {product.price.toFixed(2)}
                {
                  product.oldPrice && (
                    <Text style={styles.oldPrice}>{product.oldPrice?.toFixed(2)}</Text>
                  )
                }
                
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default Product