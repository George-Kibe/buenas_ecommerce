import { View, Text, StyleSheet, Image } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"


const Product = () => {
  return (
    <View style={styles.page}>
      <View style={styles.root}>
        <Image style={styles.image} source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg"}}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>Logitech MX Master 3 Advanced Wireless Mouse for Macbooks</Text>
          <View style={styles.rating}>
            <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"}/>
            <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"}/>
            <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"}/>
            <FontAwesome style={styles.star} name="star-half-full" size={20} color={"#e47911"}/>
            <FontAwesome style={styles.star} name="star-o" size={20} color={"#e47911"}/>
            <Text>13051</Text>
          </View>
          <Text style={styles.price}>From Kshs. 2500
            <Text style={styles.oldPrice}> Kshs. 3500</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    page:{
      
    },
    root:{
      flexDirection: "row",
      borderWidth:1,
      borderColor:"#d1d1d1",
      borderRadius:10,
      backgroundColor:"#fff"
    },
    image:{
      flex:2,
      height:150,
      borderRadius:10,
      resizeMode:"contain",
    },
    rightContainer:{
      padding:10,
      flex:3
    },
    title:{
      fontSize:18,
    },
    rating:{
      flexDirection:"row",
      alignItems:"center",
      marginVertical:5
    },
    star:{
      margin:2,
    },
    price:{
      fontSize:18,
      fontWeight:"bold"
    },
    oldPrice:{
      fontSize:12,
      fontWeight:"normal",
      textDecorationLine:"line-through"
    },
  })

export default Product