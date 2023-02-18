import { View, StyleSheet, FlatList , Text} from 'react-native'
import React from 'react'
import CartProduct from '../../components/CartProduct'
import dummyproducts from "../../assets/data/cart"

const ShoppingCartScreen = () => {
    const totalPrice = dummyproducts.reduce(
        (summedPrice, cartproduct) =>
          summedPrice + cartproduct.product.price * cartproduct.quantity,
        0,
      );

  return (
    <View style={styles.page}>
        <View>
            <Text>Subtotal ({dummyproducts.length} items): {totalPrice}</Text>
        </View>
        {/* {products.map((product) =><Product product={product} key={product.id}/>)} */}
        <FlatList
            data={dummyproducts}
            renderItem={({item}) => <CartProduct cartItem={item}/>}
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
    

export default ShoppingCartScreen;