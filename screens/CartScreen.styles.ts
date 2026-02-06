import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkBg: {
    backgroundColor: '#121212',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  darkHeader: {
    borderBottomColor: '#333',
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
  darkCard: {
    backgroundColor: '#1e1e1e',
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
  darkQtyBtn: {
    backgroundColor: '#555',
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
  darkQtyPill: {
    backgroundColor: '#333',
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
  darkFooter: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
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
  darkText: {
    color: '#fff',
  },
  darkTextSecondary: {
    color: '#aaa',
  },
});