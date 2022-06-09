import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductScreen from "../screens/ProductScreen";
import AddressScreen from "../screens/AddressScreen";
import Entypo from "react-native-vector-icons/Entypo"
import HomeStack from "./HomeStack"
import ShoppingCartAndAddressStack from "./ShoppingCartAndAddressStack"
import MenuScreen from "../screens/MenuScreen";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (    
    <Tab.Navigator
    screenOptions={{
        "tabBarActiveTintColor": "#ff0000",
        "tabBarInactiveTintColor": "#0000ff",
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ],
        headerShown: false
      }}
    >
        <Tab.Screen component={HomeStack} name="Home"
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="home" color={color} size={22} />
                )
            }}
            />
        <Tab.Screen component={ProductScreen} name="Products"
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="user" color={color} size={22} />
                )
            }}
        />
        <Tab.Screen component={ShoppingCartAndAddressStack} name="Shopping Cart"
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="shopping-cart" color={color} size={22} />
                )
            }}
        />
        <Tab.Screen component={MenuScreen} name="more"
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="menu" color={color} size={22} />
                )
            }}
        />
    </Tab.Navigator>   
  )
}

export default BottomTabNavigator