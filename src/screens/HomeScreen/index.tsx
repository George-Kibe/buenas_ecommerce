import { View, FlatList, StyleSheet } from 'react-native'
import {useState} from 'react'
import Product from '../../components/Product' 
import products from "../../data/products"
import {Datastore} from 'aws-amplify'
import {Product as ProductModel } from "../../models"

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