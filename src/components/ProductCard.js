import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.title}>{product.title}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3
  },
  image: {
    height: 100,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 14,
    fontWeight: '600'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  }
});

export default ProductCard;
