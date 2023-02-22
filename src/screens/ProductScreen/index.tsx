import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
//import product from "../../assets/data/product"
import ImageCarousel from '../../components/ImageCarousel'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import { DataStore, Auth } from 'aws-amplify'
import { CartProduct, Product } from '../../models'

import styles from './styles'
import Loading from '../../components/Loading/Loading'

const ProductScreen = ({route, navigation}:any) => {
  const {id} = route.params;
  console.log(id)
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [selectedOption, setSelectedOption] = useState<string | null >(null)
 
  const [quantity, setQuantity] = useState(1)
  //console.warn(selectedOption)
  const addToCart = async() => {
    const userData = await Auth.currentAuthenticatedUser();
    if(!product || !userData){return}
    //console.log(userData)
    const newCartProduct = new CartProduct({
      userSub:userData.attributes.sub,
      quantity,
      option:selectedOption,
      product
    })
    await DataStore.save(newCartProduct)
    navigation.navigate("ShoppingCart")
  }
  useEffect(() => {
    if(!id){return}
    DataStore.query(Product, id).then(setProduct)
  }, [])

  useEffect(() => {
    if(product?.options){
      setSelectedOption(product.options[0])
    }
  }, [product])
  

  if(!product){
    return <Loading/>
  }
  console.log(selectedOption)
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>ProductScreen</Text>

      <ImageCarousel images={product.images}/>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        {
            product?.options.map((option) => (<Picker.Item label={option} value={option} key={option} />))
        }
    
      </Picker>      

      <Text style={styles.price}>
        From Kshs {product.price.toFixed(2)}
          {
            product.oldPrice && (
              <Text style={styles.oldPrice}>{product.oldPrice?.toFixed(2)}</Text>
            )
          }
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button text={"Add to Cart"} onPress={addToCart} 
        customStyles={{backgroundColor:"#e3c905"}}
      />
      <Button text={"Buy Now"} onPress={() =>console.warn("Buy Now")} />
    </ScrollView>
  )
}

export default ProductScreen