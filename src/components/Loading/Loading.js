import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/black-loading.gif')}  
        style={{width: 100, height: 100 }}
      />
      <Text>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        height:"100%"
    }
})