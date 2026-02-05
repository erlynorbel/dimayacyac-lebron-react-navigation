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

export default function CartScreen({ navigation }: any) {
  const { cart, addToCart, removeFromCart, totalPrice } = useCart();
  const items = Object.values(cart);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.itemCount}>
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="cart-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>Your cart is empty</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.itemInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>₱{item.price} each</Text>
              <Text style={styles.subtotal}>
                Subtotal: ₱{item.price * (item.quantity ?? 0)}
              </Text>
            </View>

            <View style={styles.quantityRow}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => removeFromCart(item.id)}
              >
                <Ionicons name="remove" size={18} color="#fff" />
              </TouchableOpacity>

              <View style={styles.qtyPill}>
                <Text style={styles.qtyText}>{item.quantity}</Text>
              </View>

              <TouchableOpacity
                style={styles.qtyBtn}
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
        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total:</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  itemCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  listContent: {
    padding: 16,
    paddingBottom: 120,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: '#888',
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
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    marginTop: 2,
    color: '#555',
    fontSize: 14,
  },
  subtotal: {
    marginTop: 4,
    fontWeight: '600',
    fontSize: 14,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 8,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyPill: {
    marginHorizontal: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#ddd',
    minWidth: 50,
    alignItems: 'center',
  },
  qtyText: {
    fontWeight: 'bold',
    fontSize: 16,
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
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  checkoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
  },
});