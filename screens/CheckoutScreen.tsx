import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import { styles } from './CheckoutScreen.styles';

export default function CheckoutScreen({ navigation }: any) {
  const { cart, totalPrice, clearCart } = useCart();
  const { darkMode } = useTheme();
  const items = Object.values(cart);

  const handleCheckout = () => {
    if (totalPrice === 0) return;
    
    Alert.alert(
      'Checkout Successful',
      `Your order of ₱${totalPrice} has been placed!`,
      [
        {
          text: 'OK',
          onPress: () => {
            clearCart();
            navigation.navigate('Home');
          },
        },
      ],
      { 
        cancelable: false,
        userInterfaceStyle: darkMode ? 'dark' : 'light'
      }
    );
  };

  const renderItem = ({ item }: any) => (
    <View style={[styles.card, darkMode && styles.darkCard]}>
      <View style={styles.itemInfo}>
        <Text style={[styles.itemName, darkMode && styles.darkText]}>{item.name}</Text>
        <Text style={[styles.itemDetails, darkMode && styles.darkTextSecondary]}>
          {item.quantity} × ₱{item.price}
        </Text>
      </View>

      <Text style={[styles.itemTotal, darkMode && { color: '#64B5F6' }]}>
        ₱{item.price * item.quantity}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkBg]}>
      <View style={[styles.header, darkMode && styles.darkHeader]}>
        <Ionicons name="receipt-outline" size={24} color={darkMode ? "#64B5F6" : "#2196F3"} />
        <Text style={[styles.headerText, darkMode && styles.darkText]}>Order Summary</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="cart-outline" size={64} color={darkMode ? "#555" : "#ccc"} />
            <Text style={[styles.emptyText, darkMode && styles.darkText]}>Your cart is empty</Text>
            <TouchableOpacity
              style={styles.shopBtn}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.shopBtnText}>Start Shopping</Text>
            </TouchableOpacity>
          </View>
        }
      />

      {/* Footer */}
      {items.length > 0 && (
        <View style={[styles.footer, darkMode && styles.darkFooter]}>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, darkMode && styles.darkTextSecondary]}>Items:</Text>
            <Text style={[styles.summaryValue, darkMode && styles.darkText]}>{items.length}</Text>
          </View>
          
          <View style={[styles.summaryRow, styles.totalRow, darkMode && styles.darkTotalRow]}>
            <Text style={[styles.totalLabel, darkMode && styles.darkText]}>Total:</Text>
            <Text style={[styles.totalText, darkMode && { color: '#64B5F6' }]}>₱{totalPrice}</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.checkoutBtn,
              totalPrice === 0 && styles.disabledBtn,
            ]}
            onPress={handleCheckout}
            disabled={totalPrice === 0}
          >
            <Ionicons name="checkmark-circle" size={22} color="#fff" />
            <Text style={styles.checkoutText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}