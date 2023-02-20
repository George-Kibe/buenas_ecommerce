import { View, StyleSheet, FlatList , Text} from 'react-native'
import React from 'react'
import CartProduct from '../../components/CartProduct'
import Button from '../../components/Button'
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
            <Text style={{fontSize:18, fontWeight:"bold"}}>Subtotal ({dummyproducts.length} items): {" "}
                <Text style={{color:"#e47911"}}>Kshs.{totalPrice.toFixed(2)}</Text>
            </Text>
            <Button
                text="Proceed to Checkout"
                onPress={() => console.warn("Go to checkout!")}
                customStyles={{
                    backgroundColor:"#f7e300",
                    borderColor:"#c7b702"
                }}
            />
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