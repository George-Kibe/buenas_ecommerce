import {createStackNavigator} from "@react-navigation/stack"
import ShoppingCartScreen from "../screens/ShoppingCartScreen"
import AddressScreen from "../screens/AddressScreen"


const Stack = createStackNavigator();
const ShoppingCartAndAddressStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen component={ShoppingCartScreen} name="Shopping Cart"
          options={{title:"Shopping Cart Details"}}/>
        <Stack.Screen component={AddressScreen} name="Shipping Address"
        options={{title:"Shipping Address"}}/>
      </Stack.Navigator>    
  )
}

export default ShoppingCartAndAddressStack