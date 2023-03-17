import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import RootNavigator from './src/navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import "core-js/features/symbol/async-iterator";
import { Amplify } from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './src/store';

import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  return (
    <View style={backgroundStyle}>
      <RootNavigator/>
    </View>
  );
}

export default withAuthenticator(App);
