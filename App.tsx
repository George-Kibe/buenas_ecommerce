import { StatusBar as S} from 'expo-status-bar';
import { SafeAreaView, StatusBar, useColorScheme, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor:isDarkMode ? Colors.darker : Colors.lighter
  }
  return (
    <SafeAreaView >
      <Text>Open up App.js to start working on your app!</Text>      
      <StatusBar barStyle={isDarkMode? 'light-content': "dark-content"} />
    </SafeAreaView>
  );
}

