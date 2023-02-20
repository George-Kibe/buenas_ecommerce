import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './BottomTabNav'

const NativeStack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen component={BottomTabNav} name="HomeNav" />
      </NativeStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator