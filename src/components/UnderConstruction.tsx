import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function UnderConstruction() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="hammer" size={30} color="green" />
        <Text style={{color: 'green'}}>Under Construction</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
      alignItems: 'center',
    gap: 12,
    padding: 20,
    backgroundColor: '#5BF9781C',
    borderRadius: 10,
  },
});
