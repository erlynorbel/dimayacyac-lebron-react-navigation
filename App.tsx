import React from 'react';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AppNavigator from './navigation/AppNavigator';


export default function App() {
    return (
        <ThemeProvider>
            <CartProvider>
                <AppNavigator />
            </CartProvider>
        </ThemeProvider>
    );
}