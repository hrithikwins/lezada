import React, { useState } from "react";
import { addItem, removeItem } from "./cart-utils";
import { toast } from "react-toastify";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const addItemToCart = (itemId, item) => {
        toast.success(item.name + " added to cart", {
            position: "bottom-center",
        });
        setCart((currentItems) => {
            return addItem(itemId, currentItems, item);
        });
    };
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
