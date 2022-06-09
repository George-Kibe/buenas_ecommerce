import {Text, ScrollView, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import styles from './styles'
import product from "../../data/product"
import {useRoute} from "@react-navigation/native"
import {DataStore} from 'aws-amplify'
import {Product } from "../../models"

import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'


const ProductScreen = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [selectedOption, setSelectedOption] = useState<String | null>(null)
  const [quantity, setQuantity] = useState(1)

  const route = useRoute();
  //console.warn(route.params.id)
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
  
  if (!product){
    return <ActivityIndicator />
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
        customStyles={{
            backgroundColor:"#e3c985",
        }}
        onPress={() => {console.warn("Add to cart clicked")}} />
      <Button text={"Buy Now!"} onPress={() => {console.warn("Buy Now Clicked!")}} />
    </ScrollView>
  )
}

export default ProductScreen