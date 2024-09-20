import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function LinkTopBar() {
  return (
    <View style={[styles.topbar]}>
      <View style={styles.button}></View>
      <Text>Categories</Text>
      <View style={styles.buttons}>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
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
  button: {
    width: 30,
    height: 30,
    borderRadius: 4,
    backgroundColor: '#FFFFFFFF',
  },
  buttons: {
    flexDirection: 'row',
    gap: 16,
    marginLeft: 'auto',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: '999',
    marginLeft: 'auto',
  },
});
