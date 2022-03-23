export const addItem = (itemId, cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.itemId === itemId
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.itemId === cartItemToAdd.itemId
                ? {
                      ...cartItem,
                      itemId: itemId,
                      productQuantity: cartItem.productQuantity + 1,
                  }
                : cartItem
        );
    }

    return [
        ...cartItems,
        { ...cartItemToAdd, itemId: itemId, productQuantity: 1 },
    ];
};

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.productQuantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, productQuantity: cartItem.productQuantity - 1 }
            : cartItem
    );
};
