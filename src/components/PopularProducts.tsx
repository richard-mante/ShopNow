import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface product {
  image: any;
  description: string;
  ratting: number;
  price: number;
  itemsSold: number;
}
const popularProducts: product[] = [
  {
    image: require('../assets/prem4.jpg'),
    description: 'This is just a simple secription',
    ratting: 4.5,
    price: 500,
    itemsSold: 50,
  },
  {
    image: require('../assets/prem3.webp'),
    description: 'This is just a simple secription',
    ratting: 4.5,
    price: 500,
    itemsSold: 50,
  },
  {
    image: require('../assets/prem2.webp'),
    description: 'This is just a simple secription',
    ratting: 4.5,
    price: 500,
    itemsSold: 50,
  },
];
export default function PopularProducts() {
  return (
    <View style={{marginVertical: 20, paddingHorizontal: 16}}>
      <View>
        <Text style={styles.title}>Popular Products</Text>
      </View>
      {popularProducts.map((item, index) => {
        return (
          <Product
            key={index}
            image={item.image}
            description={item.description}
            ratting={item.ratting}
            price={item.price}
            itemsSold={item.itemsSold}
          />
        );
      })}
    </View>
  );
}

const Product = ({image, description, ratting, price, itemsSold}: product) => {
  return (
    <View style={styles.productContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.descriptBox}>
        <Text style={styles.descripTitle}>{description}</Text>
        <View style={styles.rattingContent}>
          <Text style={styles.ratting}>{ratting}</Text>
          <Text style={styles.sold}>{itemsSold} items are sold</Text>
        </View>
        <Text style={styles.price}>₵{price}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    marginTop: 16,
    height: 120,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  image: {
    height: '100%',
    width: 120,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {},
  descriptBox: {
    flex: 1,
    padding: 16,
  },
  descripTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },
  rattingContent: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 4,
  },
  ratting: {},
  sold: {},
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    color: 'black',
  },
});
