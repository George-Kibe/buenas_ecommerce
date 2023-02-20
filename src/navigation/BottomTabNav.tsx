import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from "react-native-vector-icons/Entypo"
import HomeStack from './HomeStack'
import ShoppingCartAndAddressStack from './ShoppingCartAndAddressStack'

const BottomTab = createBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
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
        <BottomTab.Screen component={HomeStack} name="HomeScreen" 
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="home" color={color} size={22} />
                )
            }}
        />
        <BottomTab.Screen component={HomeStack} name="Profile" 
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="user" color={color} size={22} />
                )
            }}
        />
        <BottomTab.Screen component={ShoppingCartAndAddressStack} name="ShoppingCart" 
            options={{
                tabBarIcon:({color}) => (
                    <Entypo name="shopping-cart" color={color} size={22} />
                )
            }}
        />
        <BottomTab.Screen component={HomeStack} name="More" 
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