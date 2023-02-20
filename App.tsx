import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import RootNavigator from './src/navigation';

import { Colors } from 'react-native/Libraries/NewAppScreen';
//continue from 52:04
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootNavigator/>
    </View>
  );
}

export default App;
