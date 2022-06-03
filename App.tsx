import { StatusBar as S} from 'expo-status-bar';
import { SafeAreaView, StatusBar, useColorScheme, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor:isDarkMode ? Colors.darker : Colors.lighter,
  }
  
  return (
    <SafeAreaView style={backgroundStyle} >   
      <StatusBar barStyle={isDarkMode? 'light-content': "dark-content"} />
      <ShoppingCartScreen /> 
    </SafeAreaView>
  );
}

