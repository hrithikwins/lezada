import { Fragment } from "react";

import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../lib/product";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  deleteFromWishlist
} from "../../redux/actions/wishlistActions";
import {
  addToCompare,
  deleteFromCompare
} from "../../redux/actions/compareActions";
import ProductGrid from "./ProductGrid";

const ProductGridWrapper = ({ products, bottomSpace }) => {
    const { addToast } = useToasts();
    return (
        <Fragment>
            {products &&
                products.map((product) => {
                    // const discountedPrice = getDiscountPrice(
                    //     product.price,
                    //     product.discount
                    // ).toFixed(2);
                    // const productPrice = product.price.toFixed(2);
                    // const cartItem = cartItems.filter(
                    //     (cartItem) => cartItem.id === product.id
                    // )[0];
                    // const wishlistItem = wishlistItems.filter(
                    //     (wishlistItem) => wishlistItem.id === product.id
                    // )[0];
                    // const compareItem = compareItems.filter(
                    //     (compareItem) => compareItem.id === product.idF
                    // )[0];
                    return <h1>hii</h1>;
                    // return <ProductGrid key={product.id} product={product} />;
                })}
        </Fragment>
    );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cartData,
//     wishlistItems: state.wishlistData,
//     compareItems: state.compareData
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (
//       item,
//       addToast,
//       quantityCount,
//       selectedProductColor,
//       selectedProductSize
//     ) => {
//       dispatch(
//         addToCart(
//           item,
//           addToast,
//           quantityCount,
//           selectedProductColor,
//           selectedProductSize
//         )
//       );
//     },
//     addToWishlist: (item, addToast) => {
//       dispatch(addToWishlist(item, addToast));
//     },
//     deleteFromWishlist: (item, addToast) => {
//       dispatch(deleteFromWishlist(item, addToast));
//     },
//     addToCompare: (item, addToast) => {
//       dispatch(addToCompare(item, addToast));
//     },
//     deleteFromCompare: (item, addToast) => {
//       dispatch(deleteFromCompare(item, addToast));
//     }
//   };
// };

export default ProductGridWrapper;
