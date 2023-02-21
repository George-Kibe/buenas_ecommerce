import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import {Text, SafeAreaView, View, TextInput, Pressable} from "react-native"
import Feather from "react-native-vector-icons/Feather"

const Stack = createNativeStackNavigator();

interface HeaderComponentProps{
  searchValue:string;
  setSearchValue: () => void;
}

const HeaderComponent = ({searchValue, setSearchValue}:HeaderComponentProps) =>{
  return (
    <SafeAreaView style={{backgroundColor:"#22e3dd"}}>
      <View style={{ margin:10, padding:5,backgroundColor:"white", borderRadius:20,
                    flexDirection:"row", alignItems:"center"}}>
        <Feather name="search" size={20} />
        <TextInput style={{height:40,marginLeft:5, fontSize:16}}
                value={searchValue} placeholder="Search..."
                onChangeText={setSearchValue}/>
      </View>      
    </SafeAreaView>
  )
} 
const HomeStack = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <Stack.Navigator screenOptions={{
      header:() => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />,
      //headerShown:false
    }}
    >
      <Stack.Screen name="Home Screen" options={{title:"Buenas Home"}}>
        {() => <HomeScreen searchValue={searchValue} /> }
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="Product Details"
      options={{title:"Buenas Products"}}/>
    </Stack.Navigator>    
  )
}

export default HomeStack