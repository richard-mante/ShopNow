import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from './src/screen/Home';
import Categories from './src/screen/Categories';
import Articles from './src/screen/Articles';
import Chat from './src/screen/Chat';
import Cart from './src/screen/Cart';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  const Tab = createBottomTabNavigator();
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#fff',
      elevation: 0,
      position: 'absolute',
      height: 60,
      paddingVertical: 6,
    },
    tabBarItemStyle: {
      paddingBottom: 10,
    },
  };
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Image
                height={20}
                width={20}
                source={require('./src/assets/icons/cart.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarIcon: () => (
              <Image
                height={20}
                width={20}
                source={require('./src/assets/icons/categories.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Articles"
          component={Articles}
          options={{
            tabBarIcon: () => (
              <Image
                height={18}
                width={18}
                source={require('./src/assets/icons/file.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: () => (
              <Image
                height={20}
                width={20}
                source={require('./src/assets/icons/chat.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: () => (
              <Image
                height={20}
                width={20}
                source={require('./src/assets/icons/cart.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
