import { useState, useEffect } from 'react'
import { View,Text, FlatList, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
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
      const userData = await Auth.currentAuthenticatedUser();
      const userSub = userData.attributes.sub
      DataStore.query(CartProduct, cp => cp.userSub("eq", userSub)).then(setCartProducts)
    }
    fetchProducts();
  }, [cartProducts, cartProducts.length])
  

  const totalPrice = cartProducts.reduce(
    (summedPrice, cartproduct) =>
      summedPrice + cartproduct.product.price * cartproduct.quantity, 0,
  );
  
  const proceedToCheckout = () =>{
    navigation.navigate("Shipping Address")
  }
  if (cartProducts.length < 1){
    return <View style={{justifyContent:"center", alignItems:"center", height:"100%"}}>
      <View>
      <ActivityIndicator size="large" color="#ff0000"/>
      </View>
      <View style={{marginTop:20, justifyContent:"center", alignItems:"center",}}>
        <Text style={{fontSize:20}}>Loading...</Text>
        <Text style={{fontSize:20, marginTop:30, maxWidth:"80%"}}>Please Ensure You have added at least one Item to the cart...</Text>
      </View>
    </View>
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