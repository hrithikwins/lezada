import { Fragment, useState } from "react";

import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../lib/product";
import { addToCart } from "../../redux/actions/cartActions";
import {
    addToWishlist,
    deleteFromWishlist,
} from "../../redux/actions/wishlistActions";
import {
    addToCompare,
    deleteFromCompare,
} from "../../redux/actions/compareActions";
import ProductGridList from "./ProductGridList";

const ProductGridWrapper = ({
    products,
    //   bottomSpace,
    //   addToCart,
    //   addToWishlist,
    //   deleteFromWishlist,
    //   addToCompare,
    //   deleteFromCompare,
    //   cartItems,
    //   wishlistItems,
    //   compareItems
}) => {
    const { addToast } = useToasts();
    return (
        <Fragment>
            {products &&
                products.map((product) => {
                    return (
                        <>
                            <ProductGridList
                                key={product.name}
                                product={product.productData}
                                productId={product._id}
                            />
                        </>
                    );
                })}
        </Fragment>
    );
};

export default ProductGridWrapper;
