import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, animation} from '../constants';
import LottieView from 'lottie-react-native';
import {CommonActions} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('get');
    navigation.dispatch(
      CommonActions.reset({
        index: 1, //the stack index
        routes: [
          {name: 'get'}, //to go to initial stack screen
        ],
      }),
    );
  }, 1500);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={COLORS.primary}
          animated
          showHideTransition={'fade'}
        />
        <LottieView
          source={animation.Splash4}
          autoPlay
          loop={false}
          style={styles.animation}
          resizeMode="cover"
          autoSize
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    display: 'flex',
    flex: 1,
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    flex: 0,
    marginHorizontal: 50,
    borderWidth: 1.5,
    borderColor: COLORS.white,
    height: 150,
    elevation: 20,
  },
  animation: {
    width: '100%',
    height: 150,
  },
});
