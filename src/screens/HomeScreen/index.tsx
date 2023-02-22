import { View, StyleSheet, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import ProductComponent from '../../components/Product'
import dummyproducts from "../../assets/data/products"
import { DataStore } from 'aws-amplify'
import  {Product, CartProduct} from "../../models"

const HomeScreen = ({searchValue, setSearchValue,route, navigation}:any) => {
  //console.log(searchValue)
  const [searchProducts, setSearchProducts] = useState<Product[]>([])
  const [allProducts, setAllProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    try{
      const results = await DataStore.query(Product);
      console.log(results)
      setAllProducts(results)
    }catch(error){
      console.log("Fetching Data Error!",error)
      console.log(typeof Symbol.asyncIterator !== 'undefined');
    }      
  }
  useEffect(() => {
   fetchProducts();
   //DataStore.query(Product).then(setAllProducts)
  }, [])
  
  useEffect(() => {    
    const searchresults = allProducts?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchProducts(searchresults); 
  }, [searchValue, allProducts])
  return (
    <View style={styles.page}>
      {/* {products.map((product) =><Product product={product} key={product.id}/>)} */}
      <FlatList
        data={searchProducts? searchProducts:allProducts}
        renderItem={({item}) => <ProductComponent product={item} />}
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