import { View, StyleSheet, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import Product from '../../components/Product'
import dummyproducts from "../../assets/data/products"


const HomeScreen = ({searchValue, setSearchValue,route, navigation}:any) => {
  //console.log(searchValue)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const results = dummyproducts?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    setProducts(results);    
  }, [searchValue])

  return (
    <View style={styles.page}>
      {/* {products.map((product) =><Product product={product} key={product.id}/>)} */}
      <FlatList
        data={products? products:dummyproducts}
        renderItem={({item}) => <Product product={item} />}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    page:{
        padding:10
    }
})
    

export default HomeScreen