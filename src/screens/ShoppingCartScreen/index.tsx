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
  const [loading, setLoading] = useState(false)

  const fetchCartProducts = async () => {
    setLoading(true)
    const userData = await Auth.currentAuthenticatedUser();
    const userSub = userData.attributes.sub;

    const response = await API.graphql(graphqlOperation(listCartProducts, {
      filter: {
        userSub:{ eq: userSub }
      },
      include: {
        product: true,
      },
    }));
    
    const cartproducts = response.data.listCartProducts.items
    setCartProducts(cartproducts)
    setLoading(false)
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    const subscription = DataStore.observe(CartProduct).subscribe(msg =>
      fetchCartProducts(),
    );
    return subscription.unsubscribe;
  }, []);
  
  useEffect(() => {
    const subscriptions = cartProducts.map(cp =>
      DataStore.observe(CartProduct, cp.id).subscribe(msg => {
        if (msg.opType === 'UPDATE') {
          setCartProducts(curCartProducts =>
            curCartProducts.map(cp => {
              if (cp.id !== msg.element.id) {
                console.log('differnt id');
                return cp;
              }
              return {
                ...cp,
                ...msg.element,
              };
            }),
          );
        }
      }),
    );

    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  }, [cartProducts]);
  
  //const totalPrice = 4546
  const totalPrice = cartProducts.reduce(
      (summedPrice, cartproduct) =>
        summedPrice + cartproduct.product.price * cartproduct.quantity,
      0,
    );
  const goToCheckout = () => {
      navigation.navigate("Shipping Address", {totalPrice:totalPrice})
  }
 

  console.log("Cart Products: ",cartProducts)

  if (loading) {
    return <Loading/>
  }
  if (cartProducts.length < 1) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          display:'flex'
        }}>
        <View style={{flex:1}}><Loading/></View>
        <View
          style={{
            marginTop: 0,
            alignItems: 'center',
            flex:1
          }}>
          <Text style={{fontSize: 20, marginHorizontal: 50,color:"red"}}>
            Please Ensure You have added at least one Item to the cart...
          </Text>
        </View>
      </View>
    );
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
        <FlatList
            data={cartProducts}
            renderItem={({item}) => <CartProductComponent cartItem={item}/>}
            keyExtractor={({id}) => id}
            showsVerticalScrollIndicator={false}
        />
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

