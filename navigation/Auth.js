import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Components/SplashScreen';
import getStart from '../AuthStack/getStart';
import LoginScreen from '../AuthStack/LoginScreen';
import SignUpScreen from '../AuthStack/SignUpScreen';

const Stack = createStackNavigator();

const Auth = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="get"
        component={getStart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Auth;
