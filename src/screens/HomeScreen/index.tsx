import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Product from '../../components/Product'
import products from "../../data/products"

const HomeScreen = ({searchValue}:{searchValue:string}) => {
  //console.warn(searchValue)
  return (
    <View style={styles.page}>
      {/* {products.map((product) =><Product product={product} key={product.id}/>)} */}
      <FlatList 
        data={products}
        renderItem={({item})=> <Product product={item}/>}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    padding:10,
  },
})
export default HomeScreen