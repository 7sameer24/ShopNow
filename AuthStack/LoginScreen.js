import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Input, Button, Image} from 'react-native-elements';
import {animation, COLORS} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const LoginScreen = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.view1, genericStyles.shadow]}>
        <Image
          source={animation.Logobg}
          containerStyle={styles.ImageContainer}
          resizeMode="center"
        />
        <View style={styles.headingContanier}>
          <Text style={styles.heading}>Login to your Account</Text>
        </View>
      </View>

      <View>
        <Input
          placeholder="Username or email"
          inputContainerStyle={styles.InputContainerStyle}
          inputStyle={genericStyles.m(7)}
          placeholderTextColor={COLORS.black}
          errorStyle={styles.errorStyle}
          value={Username}
          onChangeText={text => setUsername(text)}
        />
        <Input
          placeholder="Password"
          inputContainerStyle={styles.InputContainerStyle}
          inputStyle={genericStyles.m(7)}
          placeholderTextColor={COLORS.black}
          errorStyle={styles.errorStyle}
          value={Password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
        <Button
          title="Login"
          containerStyle={styles.buttonContanier}
          buttonStyle={styles.buttonStyle}
          type="solid"
          disabled={Username && Password ? false : true}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  view1: {
    backgroundColor: COLORS.primary,
    flex: 0.5,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    paddingBottom: 20,
  },
  headingContanier: {
    justifyContent: 'center',
    flexDirection: 'row',
    top: '20%',
  },
  heading: {
    fontSize: 30,
    color: COLORS.white,
    fontFamily: 'NotoSans-Regular',
  },
  ImageContainer: {
    height: '54%',
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
    top: '25%',
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
