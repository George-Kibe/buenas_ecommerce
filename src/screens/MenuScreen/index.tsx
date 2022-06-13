import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'

const MenuScreen = () => {
  const navigation = useNavigation()
  const onLogout = () =>{
    Auth.signOut();
  }
  const goToCheckout =() =>{
    navigation.navigate("Shopping Cart")
  }
  const goToHome =() =>{
    navigation.navigate("Home")
  }
  const goToDreamItems =() =>{
    navigation.navigate("Shopping Cart")
  }
  return (
    <SafeAreaView style={{margin:20, height:"100%", justifyContent:"center"}}>
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:20}}>We are glad you chose to shop with us!</Text>
      </View>
      <Button text="Go to Checkout" onPress={goToCheckout} />
      <Button text="Go Back Home" onPress={goToHome} />
      <Button text="View Dream Items" onPress={goToDreamItems} />
      <Button text="Sign Out" onPress={onLogout} customStyles={{backgroundColor:"#e7e7e7"}} />
    </SafeAreaView>
  )
}

export default MenuScreen