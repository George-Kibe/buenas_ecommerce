import { View, Text, StyleSheet, Image } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Product from '../../components/Product'

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <Product />
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    padding:10,
  },
})
export default HomeScreen