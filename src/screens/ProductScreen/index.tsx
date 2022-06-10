import {View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import {useRoute} from "@react-navigation/native"
import {DataStore, Auth} from 'aws-amplify'
import {Product, CartProduct } from "../../models"

import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'


const ProductScreen = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined)
  const [quantity, setQuantity] = useState(1)

  const navigation=useNavigation();
  const route = useRoute();
  //console.warn(route.params)
  useEffect(() => {
    if (!route.params?.id){
      return
    }
    DataStore.query(Product, route.params.id).then(setProduct)
  }, [route.params?.id])
  useEffect(() => {
    if (product?.options){
      setSelectedOption(product.options[0])
    }
  }, [product])
  
  const onAddToCart = async () =>{
    const userData = await Auth.currentAuthenticatedUser()
    //console.warn(userData.attributes.sub)
    if (!product || !userData){
      return;
    }
    const newCartProduct = new CartProduct({
      userSub:userData.attributes.sub,
      quantity,
      option:selectedOption,
      product:product,
    });
    await DataStore.save(newCartProduct);
    navigation.navigate("Shopping Cart")
  }
  
  if (!product){
    return <View style={{justifyContent:"center", alignItems:"center", height:"100%"}}>
      <View>
      <ActivityIndicator size="large" color="#ff0000"/>
      </View>
      <View style={{marginTop:20}}>
        <Text style={{fontSize:20}}>Loading...</Text>
      </View>
    </View>
  }
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      <ImageCarousel images={product.images}/>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}>
        {product.options.map(option => (
            <Picker.Item label={option} value={option} key={option}/>
        ))}
      </Picker>
      <Text style={styles.price}>From Kshs. {product.price.toFixed(2)}
        {product.oldPrice && (<Text style={styles.oldPrice}> Kshs. {product.oldPrice.toFixed(2)}</Text>)}
      </Text>
      <Text style={styles.description} numberOfLines={10}> 
          {product.description}
      </Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
      <Button text={"Add to Cart"}
        onPress={onAddToCart}
        customStyles={{
            backgroundColor:"#e3c985",
        }}
      />
      <Button text={"Buy Now!"} onPress={() => {console.warn("Buy Now Clicked!")}} />
    </ScrollView>
  )
}

export default ProductScreen