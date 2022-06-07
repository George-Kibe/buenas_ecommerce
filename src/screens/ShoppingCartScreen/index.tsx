import { View,Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import CartProductItem from "../../components/CartProductItem"
import { useNavigation } from "@react-navigation/native"

import Button from '../../components/Button'
import products from "../../data/cart"


const ShoppingCartScreen = () => {
  const navigation = useNavigation()

  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity, 0,
  );
  
  const proceedToCheckout = () =>{
    navigation.navigate("Shipping Address")
  }

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize:18, fontWeight:"bold"}}>
            Subtotal ({products.length} items): 
            <Text style={{color:"#0000ff"}}> Kshs.{totalPrice.toFixed(2)}</Text>
        </Text>
        <Button text='Proceed to Checkout' 
            onPress={proceedToCheckout}
            customStyles={{backgroundColor:"#ffff00", borderColor:"#c7b702"}}/>
      </View>
      <FlatList 
        data={products}
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
  },
})
export default ShoppingCartScreen