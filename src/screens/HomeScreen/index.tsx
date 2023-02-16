import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Product from '../../components/Product'
import dummyproducts from "../../assets/data/products"

const HomeScreen = () => {
  return (
    <View style={styles.page}>
        {/* {products.map((product) =><Product product={product} key={product.id}/>)} */}
        <FlatList
            data={dummyproducts}
            renderItem={({item}) => <Product product={item}/>}
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