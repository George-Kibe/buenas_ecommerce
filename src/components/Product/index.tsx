import { View, Text, StyleSheet, Image } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import styles from './styles'

interface ProductProps{
  product:{
    id:string,
    title:string,
    image:string,
    avgRating:number,
    ratings:number,
    price:number,
    oldPrice?:number
  }
}

const Product = ({product}: ProductProps) => {
  return (
    <View style={styles.page}>
      <View style={styles.root}>
        <Image style={styles.image} source={{uri:product.image}}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>{product.title}</Text>
          <View style={styles.rating}>
            <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"}/>
            <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"}/>
            <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"}/>
            <FontAwesome style={styles.star} name="star-half-full" size={20} color={"#e47911"}/>
            <FontAwesome style={styles.star} name="star-o" size={20} color={"#e47911"}/>
            <Text>{product.ratings}</Text>
          </View>
          <Text style={styles.price}>From Kshs. {product.price}
            {product.oldPrice && (<Text style={styles.oldPrice}> Kshs. {product.oldPrice}</Text>)}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Product