import { View, Text, StyleSheet, ScrollView } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Product from '../../components/Product'
import products from "../../data/products"

const HomeScreen = () => {
  const product=products[3]
  return (
    <ScrollView style={styles.page}>
      {
        products.map((product) =><Product product={product} key={product.id}/>)
      }
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page:{
    padding:10,
  },
})
export default HomeScreen