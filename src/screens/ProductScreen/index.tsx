import { View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import styles from './styles'
import product from "../../data/product"
import {useRoute} from "@react-navigation/native"
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'


const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null)
  const [quantity, setQuantity] = useState(1)

  const route = useRoute();
  console.warn(route.params)

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
      <Text style={styles.price}>From Kshs. {product.price}
        {product.oldPrice && (<Text style={styles.oldPrice}> Kshs. {product.oldPrice}</Text>)}
      </Text>
      <Text style={styles.description}>
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