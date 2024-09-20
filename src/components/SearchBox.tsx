import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function SearchBox() {
  return (
    <View style={styles.search}>
      <View style={styles.inputField}>
        <Text>Search chair, sofa, warbrobe,bed...</Text>
      </View>
      <View style={styles.searchButton}>
        <Icon name="magnifying-glass" size={18} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
  },
  inputField: {
    flex: 1,
    backgroundColor: '#fff',
    height: 45,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    color: '#D5D4D4FF',
  },
  searchButton: {
    width: 45,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
});
