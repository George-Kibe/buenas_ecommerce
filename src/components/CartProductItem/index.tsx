import { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import QuantitySelector from '../QuantitySelector'
import styles from './styles'

import {DataStore} from "aws-amplify"
import {CartProduct} from "../../models"
interface CartProductItemProps{
  cartItem:CartProduct;
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity, product} = cartItem;
  //console.warn(cartItem)
  const updateQuantity = async (newQuantity:number) =>{
    await DataStore.save(
      CartProduct.copyOf(cartItem, updated =>{
        updated.quantity = newQuantity;
      })
    )
  }
  
  return (
    <View style={styles.page} key={product.id}>
      <View style={styles.root}>
        <Image style={styles.image} source={{uri:product.image}}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>{product.title}</Text>
          <View style={styles.rating}>
            {
              [0,0,0,0,0].map((element, index) =>
              <FontAwesome style={styles.star}
                  key={`${product.id}-${index}`}
                  name={index < Math.floor(product.avgRating) ? "star" : "star-o"}
                  size={20}
                  color={"#e47911"}/>
              )
            }
            <Text>{product.ratings}</Text>
          </View>
          <Text style={styles.price}>From Kshs. {product.price.toFixed(2)}
            {product.oldPrice && (<Text style={styles.oldPrice}> Kshs. {product.oldPrice.toFixed(2)}</Text>)}
          </Text>
          <View style={styles.quantityContainer}>
           <QuantitySelector quantity={quantity} setQuantity={updateQuantity} />
          </View>
        </View>        
      </View>      
    </View>
  )
}

export default CartProductItem