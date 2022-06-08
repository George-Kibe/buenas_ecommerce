import "react-native-gesture-handler"

import { StatusBar as S} from 'expo-status-bar';
import { View, StatusBar, useColorScheme, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from "./src/router";

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

export default function App() {
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


