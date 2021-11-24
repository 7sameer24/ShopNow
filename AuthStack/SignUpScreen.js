import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Input, Button, Image} from 'react-native-elements';
import {animation, COLORS} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const SignUpScreen = () => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const arr = () => {
    return [
      {
        placeholder: 'Full Name',
        value: Username,
        onChangeText: setUsername,
      },
      {
        placeholder: 'Email',
        value: Email,
        onChangeText: setEmail,
      },
      {
        placeholder: 'Password',
        value: Password,
        onChangeText: setPassword,
      },
      {
        placeholder: 'Confirm Password',
        value: ConfirmPassword,
        onChangeText: setConfirmPassword,
      },
    ];
  };

  // console.log(arr());
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.view1, genericStyles.shadow]}>
        <Image
          source={animation.Logobg}
          containerStyle={styles.ImageContainer}
          resizeMode="center"
        />
        <View style={styles.headingContanier}>
          <Text style={styles.heading}>Create Account</Text>
        </View>
      </View>

      <View>
        {arr().map(x => {
          return (
            <Input
              placeholder={x.placeholder}
              inputContainerStyle={styles.InputContainerStyle}
              inputStyle={genericStyles.m(7)}
              placeholderTextColor={COLORS.black}
              errorStyle={styles.errorStyle}
              value={x.value}
              onChangeText={text => x.onChangeText(text)}
              key={x.placeholder}
            />
          );
        })}
        <Button
          title="Sign Up"
          containerStyle={styles.buttonContanier}
          buttonStyle={styles.buttonStyle}
          type="solid"
          disabled={
            Username && Email && Password && ConfirmPassword ? false : true
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  view1: {
    backgroundColor: COLORS.primary,
    flex: 0.7,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  headingContanier: {
    justifyContent: 'center',
    flexDirection: 'row',
    top: '23%',
  },
  heading: {
    fontSize: 30,
    color: COLORS.white,
    fontFamily: 'NotoSans-Regular',
  },
  ImageContainer: {
    height: '48%',
    top: '30%',
  },
  InputContainerStyle: {
    backgroundColor: COLORS.lightGray2,
    top: '8%',
    borderBottomWidth: 0,
    borderRadius: 10,
    opacity: 0.6,
  },
  forgotPass: {
    top: 35,
    flexDirection: 'row-reverse',
    right: 12,
  },
  forgotText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  buttonContanier: {
    marginHorizontal: 30,
    borderRadius: 10,
    top: '10%',
  },
  buttonStyle: {
    paddingVertical: 17,
    backgroundColor: COLORS.primary,
  },
  errorStyle: {
    margin: 0,
    top: '50%',
    left: 5,
  },
});
