import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Provider from './navigation/Provider';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Provider />
    </NavigationContainer>
  );
};

export default App;
