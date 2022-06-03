import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import BottomTabNavigator from "./bottomTabNavigator";


const Root = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen component={BottomTabNavigator} name="Buenas E-Commerce"/>
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Router