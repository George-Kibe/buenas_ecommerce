import { View,Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import CartProductItem from "../../components/CartProductItem"
import Button from '../../components/Button'


import products from "../../data/cart"


const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity, 0,
  );
  
  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize:18, fontWeight:"bold"}}>
            Subtotal ({products.length} items): 
            <Text style={{color:"#0000ff"}}> Kshs.{totalPrice.toFixed(2)}</Text>
        </Text>
        <Button text='Proceed to Checkout' 
            onPress={() => console.warn("Proceed to checkout ")}
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