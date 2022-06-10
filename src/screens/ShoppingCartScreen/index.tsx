import { useState, useEffect } from 'react'
import { View,Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import CartProductItem from "../../components/CartProductItem"
import { useNavigation } from "@react-navigation/native"

import { DataStore, Auth } from 'aws-amplify'
import { Product, CartProduct } from '../../models'
import Button from '../../components/Button'

const ShoppingCartScreen = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const navigation = useNavigation()
  useEffect(() => {
    const fetchProducts = async () =>{
      DataStore.query(CartProduct).then(setCartProducts)
    }
    fetchProducts();
  }, [cartProducts, cartProducts.length])
  

  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + product.product.price * product.quantity, 0,
  );
  
  const proceedToCheckout = () =>{
    navigation.navigate("Shipping Address")
  }

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize:18, fontWeight:"bold"}}>
            Subtotal ({cartProducts.length} items): 
            <Text style={{color:"#0000ff"}}> Kshs.{totalPrice.toFixed(2)}</Text>
        </Text>
        <Button text='Proceed to Checkout' 
            onPress={proceedToCheckout}
            customStyles={{backgroundColor:"#ffff00", borderColor:"#c7b702"}}/>
      </View>
      <FlatList 
        style={{marginBottom:40}}
        data={cartProducts}
        renderItem={({item}) => <CartProductItem cartItem={item}/>}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    padding:10,
    margin:10
  },
})
export default ShoppingCartScreen