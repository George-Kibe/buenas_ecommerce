import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen"
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import ProductScreen from "../screens/ProductScreen";
import AddressScreen from "../screens/AddressScreen";
import Entypo from "react-native-vector-icons/Entypo"

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (    
    <Tab.Navigator
    screenOptions={{
        "tabBarActiveTintColor": "#e47911",
        "tabBarInactiveTintColor": "#ffbd7c",
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
    >
        <Tab.Screen component={HomeScreen} name="Home"
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
        <Tab.Screen component={ShoppingCartScreen} name="Shopping Cart"
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="shopping-cart" color={color} size={22} />
                )
            }}
        />
        <Tab.Screen component={HomeScreen} name="Profile"
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