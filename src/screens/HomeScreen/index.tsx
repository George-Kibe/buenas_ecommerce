import { View, FlatList, StyleSheet } from 'react-native'
import {useState, useEffect} from 'react'
import ProductItem from '../../components/Product' 
import dummyProducts from "../../data/products"
import {DataStore} from 'aws-amplify'
import {Product } from "../../models"

const HomeScreen = ({searchValue}:{searchValue:string}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() =>{
    const fetchProducts = async () =>{
      const results = await DataStore.query(Product);
      setProducts(results)
      //console.warn(results.length)
      //shortform
      //DataStore.query(Product).then(setProducts);
    }
    fetchProducts();
  }, []);

  return (
    <View style={styles.page}>
      {/* {products.map((product) =><Product product={product} key={product.id}/>)} */}
      <FlatList 
        data={products.length > 0 ? products : dummyProducts}
        renderItem={({item})=> <ProductItem product={item}/>}
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