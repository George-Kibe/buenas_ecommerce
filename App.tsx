import React from 'react';
import 'react-native-gesture-handler';
import {View, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

import {StripeProvider} from "@stripe/stripe-react-native"
import {Amplify} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';

import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StripeProvider publishableKey="pk_test_51K7g1nEkdIEftzMH6rESvfaC10tC8HRv9CUwwvAImywuROtXvVqZDl0xnSGWfvA0EshZtfer0C0NbtmzFpgttyhP00cAbONgOG">
        <Router />
      </StripeProvider>
    </View>
  );
};

export default withAuthenticator(App);
