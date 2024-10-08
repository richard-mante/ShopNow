import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinkTopBar from '../components/LinkTopBar';
import Colors from '../data/theme';
import Category from '../components/Category';

interface category {
  name: string;
  description: string;
  productsAvailable: number;
  image: string;
}
export default function Categories() {
  const allCategories: category[] = [
    {
      name: 'Wardrobe',
      description: 'Some Common Description of a wardrobe',
      productsAvailable: 560,
      image: require('../assets/wardrobe.png'),
    },
    {
      name: 'Chair',
      description: 'Some Common Description of a wardrobe',
      productsAvailable: 560,
      image: require('../assets/chair.png'),
    },
    {
      name: 'Sofa',
      description: 'Some Common Description of a wardrobe',
      productsAvailable: 560,
      image: require('../assets/sofa.png'),
    },
    {
      name: 'Study Table',
      description: 'Some Common Description of a wardrobe',
      productsAvailable: 560,
      image: require('../assets/table.png'),
    },
  ];
  return (
    <View
      style={[styles.body, {backgroundColor: Colors.lightTheme.background}]}>
      <StatusBar backgroundColor={Colors.lightTheme.background} />
      <LinkTopBar />
      <ScrollView>
        {allCategories.map((item, index) => {
          return (
            <Category
              name={item.name}
              description={item.description}
              productsAvailable={item.productsAvailable}
              image={item.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'poppins',
    flex: 1,
  },
});
