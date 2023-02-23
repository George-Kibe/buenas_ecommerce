import { View, StyleSheet, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import ProductComponent from '../../components/Product'
import Loading from '../../components/Loading/Loading'
import dummyproducts from "../../assets/data/products"
import { DataStore } from 'aws-amplify'
import  {Product, CartProduct} from "../../models"

const HomeScreen = ({searchValue,route, navigation}:any) => {
  //console.log(searchValue)
  const [searchProducts, setSearchProducts] = useState<Product[]>([])
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    setLoading(true)
    try{
      const results = await DataStore.query(Product);
      //console.log("All products:",results)
      setAllProducts(results)
      setLoading(false) 
    }catch(error){
      console.log("Fetching Data Error!",error)
      console.log(typeof Symbol.asyncIterator !== 'undefined');
      setLoading(false) 
    }  
      
  }
  useEffect(() => {
   fetchProducts();
   //DataStore.query(Product).then(setAllProducts)
  }, [])
  
  useEffect(() => {    
    const searchresults = allProducts?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchProducts(searchresults); 
  }, [searchValue])
  //console.log("All Products:",allProducts)
  return (
    <View style={styles.page}>
      {
        loading && <Loading />
      }
      {
        searchProducts.length > 0 ? (
          <FlatList 
            data={searchProducts}
            renderItem={({item})=> <ProductComponent product={item}/>}
            keyExtractor={({ id }) => id}
            showsVerticalScrollIndicator={false}
          /> 
        ):(
          <FlatList 
            data={allProducts}
            renderItem={({item})=> <ProductComponent product={item}/>}
            keyExtractor={({ id }) => id}
            showsVerticalScrollIndicator={false}
          /> 
        )
      }
              
    </View>
  )
}
const styles = StyleSheet.create({
    page:{
        padding:10,
        justifyContent:"center"
    }
})
    

export default HomeScreen