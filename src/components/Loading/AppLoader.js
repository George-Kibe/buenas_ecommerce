import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const AppLoader = () => {
  return (
    <>
      <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Lottie source={require('../../assets/loading.json')} autoPlay loop />
      </View>
    </>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.2)',
    flex: 1,
    zIndex: 20,
    height: '100%',
  },
});
