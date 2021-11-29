import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import Cart from '../Home/Cart';
import Heart from '../Home/Heart';
import Profile from '../Home/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabArr = [
  {
    route: 'Home',
    Lable: 'Home',
    icon: 'home',
    component: HomeScreen,
    tabBarColor: COLORS.primary,
  },
  {
    route: 'Cart',
    Lable: 'Cart',
    icon: 'cart',
    component: Cart,
    tabBarColor: COLORS.darkgray,
  },
  {
    route: 'Heart',
    Lable: 'Heart',
    icon: 'heart-plus',
    component: Heart,
    tabBarColor: COLORS.black,
  },
  {
    route: 'Profile',
    Lable: 'Profile',
    icon: 'account',
    component: Profile,
    tabBarColor: COLORS.MoodyBlue,
  },
];

const Tabs = () => {
  return (
    <Tab.Navigator>
      {TabArr.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.component}
            options={{
              tabBarColor: _.tabBarColor,
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name={_.icon} color={color} size={26} />
              ),
              title: _.route,
              headerTitleAlign: 'center',
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

// const TabStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTitleAlign: 'center',
//       }}>
//       <Stack.Screen
//         name="home"
//         component={Tabs}
//         options={{headerShown: true}}
//       />
//     </Stack.Navigator>
//   );
// };

export default Tabs;
