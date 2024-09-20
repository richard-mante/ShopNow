import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinkTopBar from '../components/LinkTopBar';
import Colors from '../data/theme';
import Category from '../components/Category';
import UnderConstruction from '../components/UnderConstruction';

interface category {
  name: string;
  description: string;
  productsAvailable: number;
  image: string;
}

export default function Cart() {
 return <UnderConstruction />;
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'poppins',
    flex: 1,
  },
});
