import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShoppingCartScreen from "../screens/ShoppingCartScreen"
import AddressScreen from "../screens/AddressScreen"


const Stack = createNativeStackNavigator();
const ShoppingCartAndAddressStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen component={ShoppingCartScreen} name="Shopping Cart Details"
          options={{title:"Shopping Cart Details"}}/>
        <Stack.Screen component={AddressScreen} name="Shipping Address"
        options={{title:"Shipping Address"}}/>
      </Stack.Navigator>    
  )
}

export default ShoppingCartAndAddressStack