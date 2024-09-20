import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface category {
  name: string;
  description: string;
  productsAvailable: number;
  image: string;
}
export default function Category({
  name,
  description,
  productsAvailable,
  image,
}: category) {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.footNote}>
          {productsAvailable} Products available
        </Text>
      </View>
      <Image style={styles.image} source={require('../assets/prem3.webp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 120,
    marginTop: 16,
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  image: {
    height: '100%',
    width: 100,
    borderRadius: 8,
  },
  title: {
    color: '#333',
    fontSize: 15,
  },
  description: {
    color: '#A4A4A4FF',
  },
  footNote: {
    fontSize: 14,
    fontWeight: '600',
  },
});
