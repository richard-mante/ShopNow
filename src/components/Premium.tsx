import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
interface premiumProps {
  image: any;
  description: string;
}
const premItems: premiumProps[] = [
  {
    image: require('../assets/prem1.jpg'),
    description: 'This is just a simple secription',
  },
  {
    image: require('../assets/prem2.webp'),
    description: 'This is just a simple secription',
  },
  {
    image: require('../assets/prem3.webp'),
    description: 'This is just a simple secription',
  },
  {
    image: require('../assets/prem4.jpg'),
    description: 'This is just a simple secription',
  },
];
export default function Premium() {
  return (
    <ScrollView horizontal={true} style={{marginTop: 24}}>
      {premItems.map((item, index) => {
        return (
          <PremiumItem
            image={item.image}
            description={item.description}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
}

const PremiumItem = ({image, description}: premiumProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <LinearGradient
        colors={['#4D4D4D00', '#000000B2']}
        style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 200,
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'green',
    marginRight: 8,
    marginLeft: 16,
  },
  image: {
    flex: 1,
    width: '100%',
    objectFit: 'cover',
    padding: 0,
  },
  description: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  descriptionText: {
    color: '#F9F9F9FF',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    padding: 4,
    fontWeight: '600',
  },
});
