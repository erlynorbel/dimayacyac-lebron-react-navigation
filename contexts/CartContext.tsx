import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';


interface CartContextType {
    cart: Record<string, Product>;
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    totalPrice: number;
}


const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Record<string, Product>>({});


    const addToCart = (product: Product) => {
        setCart(prev => {
            const qty = prev[product.id]?.quantity ?? 0;
            return {
                ...prev,
                [product.id]: { ...product, quantity: qty + 1 }
            };
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => {
            const item = prev[id];
            if (!item) return prev;
            if (item.quantity === 1) {
                const updated = { ...prev };
                delete updated[id];
                return updated;
            }
            return {
                ...prev,
                [id]: { ...item, quantity: item.quantity! - 1 }
            };
        });
    };


    const clearCart = () => setCart({});


    const totalPrice = Object.values(cart).reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 0),
        0
    );

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
};