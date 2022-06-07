import {createStackNavigator} from "@react-navigation/stack"
import BottomTabNavigator from "./bottomTabNavigator";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import {Text, SafeAreaView, View, TextInput, Pressable} from "react-native"
import Feather from "react-native-vector-icons/Feather"
import {useState} from "react"



const Stack = createStackNavigator();

interface HeaderComponentProps{
  searchValue:string;
  setSearchValue: () => void;
}

const HeaderComponent = ({searchValue, setSearchValue}:HeaderComponentProps) =>{
  return (
    <SafeAreaView style={{backgroundColor:"#22e3dd"}}>
      <View style={{ margin:10, padding:10,backgroundColor:"white",
                    flexDirection:"row", alignItems:"center"}}>
        <Feather name="search" size={20} />
        <TextInput style={{height:30,marginLeft:5}}
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
        header:() => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>}}>
      <Stack.Screen name="Home Screen" options={{title:"Buenas Home"}}>
        {() => <HomeScreen searchValue={searchValue} /> }
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="Product Details"
      options={{title:"Buenas Products"}}/>
    </Stack.Navigator>    
  )
}

export default HomeStack