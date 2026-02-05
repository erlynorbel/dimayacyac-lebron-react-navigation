import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../contexts/CartContext';

export default function CheckoutScreen({ navigation }: any) {
  const { cart, totalPrice, clearCart } = useCart();
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
      ]
    );
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>
          {item.quantity} × ₱{item.price}
        </Text>
      </View>

      <Text style={styles.itemTotal}>
        ₱{item.price * item.quantity}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="receipt-outline" size={24} color="#2196F3" />
        <Text style={styles.headerText}>Order Summary</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="cart-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>Your cart is empty</Text>
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
        <View style={styles.footer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items:</Text>
            <Text style={styles.summaryValue}>{items.length}</Text>
          </View>
          
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalText}>₱{totalPrice}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  listContent: {
    padding: 16,
    paddingBottom: 180,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 16,
    fontSize: 16,
  },
  shopBtn: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  shopBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemDetails: {
    marginTop: 4,
    color: '#555',
    fontSize: 14,
  },
  itemTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  checkoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
  },
  disabledBtn: {
    opacity: 0.5,
  },
});