import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBar from '../components/TopBar';
import Colors from '../data/theme';
import SearchBox from '../components/SearchBox';
import Premium from '../components/Premium';
import PopularProducts from '../components/PopularProducts';

export default function Home() {
  return (
    <View
      style={[styles.body, {backgroundColor: Colors.lightTheme.background}]}>
      <TopBar />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Wide Collection Of</Text>
          <Text style={styles.title}>Home Furniture</Text>
        </View>
        <SearchBox />
        <Premium />
        <PopularProducts />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'poppins',
    flex: 1,
  },

  titleContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#333',
  },
});
