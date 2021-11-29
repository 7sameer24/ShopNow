import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native';
import {bg, COLORS} from '../constants';
import {Button, Divider} from 'react-native-elements';
import {genericStyles} from '../constants/genericStyles';

const getStart = ({navigation}) => {
  const [Loading, setLoading] = useState(true);

  // const renderButton = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     navigation.navigate('Login');
  //   }, 1000);
  // };
  const disbaleBackButton = () => {
    Alert.alert('Hold on', 'Are you sure you want to exit?', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  useEffect(() => {
    // BackHandler.addEventListener('hardwareBackPress', disbaleBackButton);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', disbaleBackButton);
  }, []);

  return (
    <ImageBackground
      source={bg.backgroundImg2}
      style={genericStyles.fill}
      resizeMethod={'auto'}
      fadeDuration={0}
      imageStyle={styles.imageStyle}>
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>Shop</Text>
        <Text style={styles.Text2}>now</Text>
      </View>
      <View style={styles.MidContainer}>
        <Text style={styles.title}>
          Whoever said that money can't buy happiness
        </Text>
      </View>
      <View style={genericStyles.top('35%')}>
        <Divider
          orientation="horizontal"
          width={1}
          style={genericStyles.mh(70)}
          color={COLORS.white}
        />
      </View>
      <View style={genericStyles.top('40%')}>
        <Button
          title="Get started for free!"
          type="solid"
          containerStyle={styles.ButtonUnder}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={() => navigation.navigate('SignUp')}
          // loading={Loading}
        />
        <Button
          title="I already have an account"
          type="solid"
          containerStyle={styles.ButtonUnder}
          buttonStyle={[styles.buttonStyle, {backgroundColor: COLORS.white}]}
          titleStyle={[styles.titleStyle, {color: COLORS.black}]}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default getStart;

const styles = StyleSheet.create({
  imageStyle: {
    backgroundColor: COLORS.primary,
    opacity: 0.9,
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: '11%',
    backgroundColor: COLORS.white,
    marginHorizontal: 100,
    paddingBottom: 7,
    borderRadius: 30,
    opacity: 0.9,
  },
  Text: {
    fontSize: 39,
    color: COLORS.primary,
    fontFamily: 'DancingScript-Bold',
  },
  Text2: {
    color: COLORS.black,
    fontSize: 39,
    marginLeft: 2,
    fontFamily: 'DancingScript-Bold',
  },
  MidContainer: {
    top: '60%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    opacity: 0.9,
  },
  title: {
    fontSize: 29,
    color: COLORS.white,
    //fontWeight: '500',
    textAlign: 'center',
    padding: 15,
    fontFamily: 'PlayfairDisplay-Medium',
  },

  ButtonUnder: {
    marginHorizontal: 30,
    marginTop: 7,
    borderRadius: 10,
  },
  buttonStyle: {
    paddingVertical: 17,
    backgroundColor: COLORS.primary,
  },
  titleStyle: {
    fontSize: 17,
    color: COLORS.white,
  },
});
