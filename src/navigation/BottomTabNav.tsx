import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeStack from './HomeStack'
import ShoppingCartAndAddressStack from './ShoppingCartAndAddressStack'
import MenuScreen from '../screens/MenuScreen'
import AddProductScreen from '../screens/AddProductScreen'
import ProfileScreen from '../screens/ProfileScreen'

const BottomTab = createBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
        screenOptions={{
            "tabBarActiveTintColor": "#ff0000",
            "tabBarInactiveTintColor": "#0000ff",
            "tabBarShowLabel": true,
            "tabBarStyle": [
            {
                "display": "flex"
            },
            null
            ],
            headerShown: false
        }}
    >
        <BottomTab.Screen component={HomeStack} name="Home" 
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="home" color={color} size={22} />
                )
            }}
        />
        <BottomTab.Screen component={ProfileScreen} name="Profile" 
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="user" color={color} size={22} />
                )
            }}
        />
         <BottomTab.Screen component={AddProductScreen} name="Sell" 
            options={{
                tabBarIcon:({color}) => (
                    <Ionicons name="add-circle-sharp" color={color} size={22} />
                )
            }}
        />
        <BottomTab.Screen component={ShoppingCartAndAddressStack} name="Cart" 
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="shopping-cart" color={color} size={22} />
                )
            }}
        />
        <BottomTab.Screen component={MenuScreen} name="More" 
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="menu" color={color} size={22} />
                )
            }}
        />
    </BottomTab.Navigator>
  )
}

export default BottomTabNav;