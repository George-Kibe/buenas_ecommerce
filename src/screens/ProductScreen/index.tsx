import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import product from "../../assets/data/product"
import ImageCarousel from '../../components/ImageCarousel'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'

import styles from './styles'
const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options[0] || null)
  const [quantity, setQuantity] = useState(1)
  //console.warn(selectedOption)
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>ProductScreen</Text>


      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        {
            product.options.map((option) => (<Picker.Item label={option} value={option} key={option} />))
        }
    
      </Picker>
      <ImageCarousel images={product.images}/>

      <Text style={styles.price}>
        From Kshs {product.price}
        <Text style={styles.oldPrice}> Kshs 999</Text>
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button text={"Add to Cart"} onPress={() =>console.warn("Add to cart")} 
        customStyles={{backgroundColor:"#e3c905"}}
      />
      <Button text={"Buy Now"} onPress={() =>console.warn("Buy Now")} />
    </ScrollView>
  )
}

export default ProductScreen