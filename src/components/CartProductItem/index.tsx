import { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import QuantitySelector from '../QuantitySelector'
import styles from './styles'

interface CartProductItemProps{
  cartItem:{
    id:string;
    quantity:number;
    option?: string;
    item:{
      id:string;
      title:string;
      image:string;
      avgRating:number;
      ratings:number;
      price:number;
      oldPrice?:number;
    }
  }
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity:quantityProp, item:product} = cartItem;
  //console.warn(cartItem)
  const [quantity, setQuantity] = useState(quantityProp)
  
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
          <Text style={styles.price}>From Kshs. {product.price}
            {product.oldPrice && (<Text style={styles.oldPrice}> Kshs. {product.oldPrice}</Text>)}
          </Text>
          <View style={styles.quantityContainer}>
           <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </View>
        </View>        
      </View>      
    </View>
  )
}

export default CartProductItem