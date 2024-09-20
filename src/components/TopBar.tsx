import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../data/theme';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icons from './Icons';

export default function TopBar() {
  return (
    <View style={[styles.topbar]}>
      <Icon name="bars" size={20} color="#4B4B4BFF" />
      <Text style={{fontSize:16}}>Galaxy Furniture</Text>
      <Image
        style={styles.profileImage}
        borderRadius={20}
        source={require('../assets/userProfile.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 24,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: '999',
    marginLeft: 'auto',
  },
});
