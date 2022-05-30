import { View, Text } from 'react-native'
import styles from './styles'
import product from "../../data/product"
import { Picker } from '@react-native-picker/picker'

const ProductScreen = () => {
    
  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>
    
      <Picker>
        {product.options.map(option => (
            <Picker.Item label={option} value={option}/>
        ))}
      </Picker>
      <Text style={styles.price}>From Kshs. {product.price}
        {product.oldPrice && (<Text style={styles.oldPrice}> Kshs. {product.oldPrice}</Text>)}
      </Text>
      <Text style={styles.description}>
          {product.description}
      </Text>
    </View>
  )
}

export default ProductScreen