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

interface TabProps {
  name: string;
  image: any;
  screen: React.FC;
}
export default function App() {
  const tabs: TabProps[] = [
    {name: 'Home', image: require('./src/assets/icons/home.png'), screen: Home},
    {name: 'Categories', image: require('./src/assets/icons/categories.png'),screen: Categories},
    {name: 'Article', image: require('./src/assets/icons/file.png'), screen: Articles},
    {name: 'Chat', image: require('./src/assets/icons/chat.png'), screen: Chat},
    {name: 'Cart', image: require('./src/assets/icons/cart.png'), screen: Cart},
  ];
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
        {tabs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.screen}
            options={{
              tabBarIcon: () => (
                <Image height={20} width={20} source={tab.image} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
