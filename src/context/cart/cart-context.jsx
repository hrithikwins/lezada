import React, { useState } from "react";
import { addItem, removeItem } from "./cart-utils";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const addItemToCart = (item) =>
        setCart((currentItems) => {
            return addItem(currentItems, item);
        });
    const removeItemFromCart = (item) =>
        setCart((currentItems) => {
            console.log("Remove item called with " + item);
            return removeItem(currentItems, item);
        });
    return (
        <CartContext.Provider value={[cart, addItemToCart, removeItemFromCart]}>
            {props.children}
        </CartContext.Provider>
    );
};
