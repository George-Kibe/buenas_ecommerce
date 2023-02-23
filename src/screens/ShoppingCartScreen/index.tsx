import { ScrollView, View, StyleSheet, FlatList , Text} from 'react-native'
import React, {useState, useEffect} from 'react'
import CartProductComponent from '../../components/CartProduct'
import Button from '../../components/Button'
import dummyproducts from "../../assets/data/cart"

import { DataStore, Auth, API, graphqlOperation } from 'aws-amplify'
import { Product, CartProduct } from '../../models'
import { listCartProducts } from '../../graphql/queries'
import Loading from '../../components/Loading/Loading'

const ShoppingCartScreen = ({navigation, route}:any) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    const userSub = userData.attributes.sub;

    const response = await API.graphql(graphqlOperation(listCartProducts, {
      filter: {
        product:{ ne: null }
      },
      include: {
        product: true,
      },
    }));
    
    const items = response.data.listCartProducts.items
    console.log("Type of:",typeof items);
    console.log(items)
    const products = Object.entries(items);
    setCartProducts(products)

  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  
  const totalPrice = 4546
  // const totalPrice = cartProducts.reduce(
  //     (summedPrice, cartproduct) =>
  //       summedPrice + cartproduct.product.price * cartproduct.quantity,
  //     0,
  //   );
  const goToCheckout = () => {
      navigation.navigate("Shipping Address", {totalPrice:totalPrice})
  }
 

  console.log("Cart Products: ",cartProducts)

  if (false) {
    return <Loading/>
  }
  return (
    <View style={styles.page}>
        <View>
            <Text style={{fontSize:18, fontWeight:"bold"}}>Subtotal ({cartProducts?.length} items): {" "}
                <Text style={{color:"#e47911"}}>Kshs.{totalPrice?.toFixed(2)}</Text>
            </Text>
            <Button
                text="Proceed to Checkout"
                onPress={goToCheckout}
                customStyles={{
                    backgroundColor:"#f7e300",
                    borderColor:"#c7b702"
                }}
            />
        </View>
        {/* {products.map((product) =><Product product={product} key={product.id}/>)} */}
        {/* <FlatList
            data={cartProducts}
            renderItem={({item}) => <CartProductComponent cartItem={item}/>}
            keyExtractor={({id}) => id}
            showsVerticalScrollIndicator={false}
        />  */}
    </View>
  )
}
const styles = StyleSheet.create({
    page:{
        padding:10,
        flex:1
    }
})
    

export default ShoppingCartScreen;




// if (cartProducts.length < 1) {
//   return (
//     <View
//       style={{
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100%',
//         display:'flex'
//       }}>
//       <View style={{flex:1}}><Loading/></View>
//       <View
//         style={{
//           marginTop: 0,
//           alignItems: 'center',
//           flex:1
//         }}>
//         <Text style={{fontSize: 20, marginHorizontal: 50,color:"red"}}>
//           Please Ensure You have added at least one Item to the cart...
//         </Text>
//       </View>
//     </View>
//   );
// }
