import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () =>{
    setQuantity(Math.max(0, quantity - 1))
  }
  const onPlus = () =>{
    setQuantity(quantity + 1)
  }
  return (
    <View style={styles.root}>
      <Pressable  style={styles.button} onPress={onMinus}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <View style={styles.quantityView}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <Pressable style={styles.button} onPress={onPlus}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderWidth:1,
        borderColor:"#e3e3e3",
        width:"30%",
    },
    button:{
        width:35,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#d1d1d1"
    },
    buttonText:{
        fontSize:18,
    },
    quantityView:{
      justifyContent:"center",
      width:"50%",
      alignItems:"center"
    },
    quantity:{
        color:"#007eb9",
        fontSize:16,
        fontWeight:"bold"
    }
})

export default QuantitySelector