import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

const PRODUCTS: Product[] = [
  { id: '1', name: 'Apple', price: 20 },
  { id: '2', name: 'Banana', price: 10 },
  { id: '3', name: 'Orange', price: 15 },
];

export default function HomeScreen({ navigation }: any) {
  const { addToCart } = useCart();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkBg]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, darkMode && styles.darkText]}>
          Products
        </Text>
        <Switch value={darkMode} onValueChange={toggleTheme} />
      </View>

      {/* Product List */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={[styles.card, darkMode && styles.darkCard]}>
            <Text style={[styles.name, darkMode && styles.darkText]}>
              {item.name}
            </Text>
            <Text style={[styles.price, darkMode && styles.darkText]}>
              ₱{item.price}
            </Text>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Go to Cart */}
      <TouchableOpacity
        style={styles.cartBtn}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cartBtnText}>Go to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkBg: {
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  darkCard: {
    backgroundColor: '#1e1e1e',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartBtn: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  cartBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  darkText: {
    color: '#fff',
  },
});
