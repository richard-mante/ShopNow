import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function LinkTopBar() {
  return (
    <View style={[styles.topbar]}>
      <Icon name="chevron-left" size={20} color="#4B4B4BFF" />
      <Text style={{fontSize: 16}}>Categories</Text>
      <View style={styles.buttons}>
        <Icon name="magnifying-glass" size={18} color="#7A7474" />
        <Icon name="heart" size={18} color="#7A7474" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    gap: 12,
  },

  buttons: {
    flexDirection: 'row',
    gap: 32,
    marginLeft: 'auto',
    alignItems: 'center',
    paddingRight: 16,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: '999',
    marginLeft: 'auto',
  },
});
