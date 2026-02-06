import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import { styles } from './CartScreen.styles';

export default function CartScreen({ navigation }: any) {
  const { cart, addToCart, removeFromCart, totalPrice } = useCart();
  const { darkMode } = useTheme();
  const items = Object.values(cart);

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkBg]}>
      <View style={[styles.header, darkMode && styles.darkHeader]}>
        <Text style={[styles.title, darkMode && styles.darkText]}>Your Cart</Text>
        <Text style={[styles.itemCount, darkMode && styles.darkTextSecondary]}>
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="cart-outline" size={64} color={darkMode ? "#555" : "#ccc"} />
            <Text style={[styles.emptyText, darkMode && styles.darkText]}>Your cart is empty</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={[styles.card, darkMode && styles.darkCard]}>
            <View style={styles.itemInfo}>
              <Text style={[styles.name, darkMode && styles.darkText]}>{item.name}</Text>
              <Text style={[styles.price, darkMode && styles.darkTextSecondary]}>
                ₱{item.price} each
              </Text>
              <Text style={[styles.subtotal, darkMode && styles.darkText]}>
                Subtotal: ₱{item.price * (item.quantity ?? 0)}
              </Text>
            </View>

            <View style={styles.quantityRow}>
              <TouchableOpacity
                style={[styles.qtyBtn, darkMode && styles.darkQtyBtn]}
                onPress={() => removeFromCart(item.id)}
              >
                <Ionicons name="remove" size={18} color="#fff" />
              </TouchableOpacity>

              <View style={[styles.qtyPill, darkMode && styles.darkQtyPill]}>
                <Text style={[styles.qtyText, darkMode && styles.darkText]}>{item.quantity}</Text>
              </View>

              <TouchableOpacity
                style={[styles.qtyBtn, darkMode && styles.darkQtyBtn]}
                onPress={() => addToCart(item)}
              >
                <Ionicons name="add" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Footer */}
      {items.length > 0 && (
        <View style={[styles.footer, darkMode && styles.darkFooter]}>
          <View style={styles.totalRow}>
            <Text style={[styles.totalLabel, darkMode && styles.darkText]}>Total:</Text>
            <Text style={styles.total}>₱{totalPrice}</Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={() => navigation.navigate('Checkout')}
          >
            <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
