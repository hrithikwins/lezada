import { CartProvider } from "./cart/cart-context";

const GlobalProvider = (props) => {
    // UserProvider
    //     Wishlist & CartProvider
    //         Wallet Provider
    return (
        <>
            <CartProvider>{props.children}</CartProvider>
        </>
    );
};
export default GlobalProvider;
