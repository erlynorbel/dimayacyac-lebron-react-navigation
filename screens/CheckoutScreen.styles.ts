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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  darkHeader: {
    borderBottomColor: '#333',
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
  darkCard: {
    backgroundColor: '#1e1e1e',
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
  darkFooter: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
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
  darkTotalRow: {
    borderTopColor: '#333',
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
  darkText: {
    color: '#fff',
  },
  darkTextSecondary: {
    color: '#aaa',
  },
});