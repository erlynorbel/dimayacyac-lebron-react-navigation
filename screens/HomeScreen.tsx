import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import { styles } from './HomeScreen.styles';

// Import local images
import appleImage from '../assets/images/apple.png';
import bananaImage from '../assets/images/banana.png';
import orangeImage from '../assets/images/orange.png';
import mangoImage from '../assets/images/mango.png';
import strawberryImage from '../assets/images/strawberry.png';
import grapesImage from '../assets/images/grapes.png';
import watermelonImage from '../assets/images/watermelon.png';
import pineappleImage from '../assets/images/pineapple.png';
import berriesImage from '../assets/images/berries.png';

const PRODUCTS: Product[] = [
  { id: '1', name: 'Apple', price: 20, image: appleImage },
  { id: '2', name: 'Banana', price: 10, image: bananaImage },
  { id: '3', name: 'Orange', price: 15, image: orangeImage },
  { id: '4', name: 'Mango', price: 25, image: mangoImage },
  { id: '5', name: 'Strawberry', price: 30, image: strawberryImage },
  { id: '6', name: 'Grapes', price: 35, image: grapesImage },
  { id: '7', name: 'Watermelon', price: 40, image: watermelonImage },
  { id: '8', name: 'Pineapple', price: 28, image: pineappleImage },
  { id: '9', name: 'Berries', price: 28, image: berriesImage },
];

export default function HomeScreen({ navigation }: any) {
  const { addToCart } = useCart();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkBg]}>
      {/* Header */}
      <View style={[styles.header, darkMode && styles.darkHeader]}>
        <Text style={[styles.title, darkMode && styles.darkText]}>
          Fruits
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

      {/* Product Grid */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.gridContent}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <View style={[styles.gridCard, darkMode && styles.darkGridCard]}>
            {/* Product Image */}
            <Image
              source={typeof item.image === 'string' ? { uri: item.image } : item.image}
              style={styles.productImage}
            />
            
            {/* Product Info */}
            <View style={styles.gridProductInfo}>
              <Text 
                style={[styles.gridName, darkMode && styles.darkText]}
                numberOfLines={2}
              >
                {item.name}
              </Text>
              <Text style={[styles.gridPrice, darkMode && styles.darkTextSecondary]}>
                ₱{item.price}
              </Text>
            </View>

            {/* Add to Cart Button */}
            <TouchableOpacity
              style={styles.gridAddBtn}
              onPress={() => addToCart(item)}
            >
              <Ionicons name="cart-outline" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Go to Cart */}
      <View style={[styles.footer, darkMode && styles.darkFooter]}>
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