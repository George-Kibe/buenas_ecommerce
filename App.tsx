import "react-native-gesture-handler"
import { View, StatusBar, useColorScheme, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from "./src/router";

import { Amplify } from 'aws-amplify'
import {withAuthenticator} from "aws-amplify-react-native"

import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor:isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  }

  return (
    <View style={backgroundStyle} >   
      <StatusBar barStyle={isDarkMode? 'light-content': "dark-content"} />
      <Router /> 
    </View>
  );
}

export default withAuthenticator(App);


