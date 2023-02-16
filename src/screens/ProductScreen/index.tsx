import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import product from "../../assets/data/product"
import QuantitySelector from '../../components/QuantitySelector'

import styles from './styles'
const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options[0] || null)
  const [quantity, setQuantity] = useState(1)
  //console.warn(selectedOption)
  return (
    <View>
      <Text style={styles.title}>ProductScreen</Text>


      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        {
            product.options.map((option) => (<Picker.Item label={option} value={option} key={option} />))
        }
    
      </Picker>

      <Text style={styles.price}>
        From Kshs {product.price}
        <Text style={styles.oldPrice}> Kshs 999</Text>
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </View>
  )
}

export default ProductScreen