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
import { Ionicons } from '@expo/vector-icons';
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
        <View style={styles.themeToggle}>
          <Ionicons 
            name={darkMode ? "moon" : "sunny"} 
            size={20} 
            color={darkMode ? "#fff" : "#000"} 
            style={{ marginRight: 8 }}
          />
          <Switch value={darkMode} onValueChange={toggleTheme} />
        </View>
      </View>

      {/* Product List */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[styles.card, darkMode && styles.darkCard]}>
            <View style={styles.productInfo}>
              <Text style={[styles.name, darkMode && styles.darkText]}>
                {item.name}
              </Text>
              <Text style={[styles.price, darkMode && styles.darkText]}>
                ₱{item.price}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => addToCart(item)}
            >
              <Ionicons name="cart-outline" size={18} color="#fff" />
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Go to Cart */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => navigation.navigate('Cart')}
        >
          <Ionicons name="cart" size={20} color="#fff" />
          <Text style={styles.cartBtnText}>Go to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkBg: {
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  darkCard: {
    backgroundColor: '#1e1e1e',
  },
  productInfo: {
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#555',
  },
  addBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  cartBtn: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cartBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  darkText: {
    color: '#fff',
  },
});