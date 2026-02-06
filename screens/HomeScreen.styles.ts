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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  darkHeader: {
    borderBottomColor: '#333',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  gridContent: {
    padding: 12,
    paddingBottom: 100,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  gridCard: {
    width: '32%',
    backgroundColor: '#f2f2f2',
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  darkGridCard: {
    backgroundColor: '#1e1e1e',
  },
  productImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#e0e0e0',
    resizeMode: 'cover',
  },
  gridProductInfo: {
    padding: 10,
  },
  gridName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  gridPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4CAF50',
    marginBottom: 8,
  },
  gridAddBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
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
  darkFooter: {
    backgroundColor: '#1e1e1e',
    borderTopColor: '#333',
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
  darkTextSecondary: {
    color: '#aaa',
  },
});