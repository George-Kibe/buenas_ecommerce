import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'

const BottomTab = createBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator>
        <BottomTab.Screen component={HomeScreen} name="HomeScreen" />
        <BottomTab.Screen component={HomeScreen} name="Profile" />
        <BottomTab.Screen component={ShoppingCartScreen} name="ShoppingCart" />
        <BottomTab.Screen component={HomeScreen} name="More" />
    </BottomTab.Navigator>
  )
}

export default BottomTabNav;