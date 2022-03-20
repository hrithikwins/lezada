import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import CustomScroll from "react-custom-scroll";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../../lib/product";
import { deleteFromCart } from "../../../redux/actions/cartActions";
import { useContext } from "react";
import { CartContext } from "../../../context/cart/cart-context";

const CartOverlay = ({
    activeStatus,
    getActiveStatus,
    deleteFromCart,
}) => {
    let cartTotalPrice = 0;
    const { addToast } = useToasts();

    const [cart, addItemToCart, removeItemFromCart] = useContext(CartContext);

    return (
        <div className={`cart-overlay ${activeStatus ? "active" : ""}`}>
            <div
                className="cart-overlay__close"
                onClick={() => {
                    getActiveStatus(false);
                    document
                        .querySelector("body")
                        .classList.remove("overflow-hidden");
                }}
            />
            <div className="cart-overlay__content">
                {/*=======  close icon  =======*/}
                <button
                    className="cart-overlay__close-icon"
                    onClick={() => {
                        getActiveStatus(false);
                        document
                            .querySelector("body")
                            .classList.remove("overflow-hidden");
                    }}
                >
                    <IoIosClose />
                </button>
                {/*=======  offcanvas cart content container  =======*/}
                <div className="cart-overlay__content-container">
                    <h3 className="cart-title">Cart</h3>
                    {cart.length > 0 ? (
                        <div className="cart-product-wrapper">
                            <div className="cart-product-container">
                                <CustomScroll allowOuterScroll={true}>
                                    {cart.map((product, i) => {
                                        const discountedPrice =
                                            getDiscountPrice(
                                                product.price,
                                                product.discount
                                            ).toFixed(2);

                                        cartTotalPrice +=
                                            discountedPrice * product.quantity;

                                        return (
                                            <div
                                                className="single-cart-product"
                                                key={i}
                                            >
                                                <span className="cart-close-icon">
                                                    <button
                                                        onClick={() =>
                                                            deleteFromCart(
                                                                product,
                                                                addToast
                                                            )
                                                        }
                                                    >
                                                        <IoIosClose />
                                                    </button>
                                                </span>
                                                <div className="image">
                                                    <Link
                                                        href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                                        as={`${process.env.PUBLIC_URL}/shop/product-basic/${product.slug}`}
                                                    >
                                                        <a>
                                                            <img
                                                                src={
                                                                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcovermobi.com%2Fwp-content%2Fuploads%2F2020%2F10%2FIPHE6D115.jpg&f=1&nofb=1"
                                                                }
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="content">
                                                    <h5>
                                                        <Link
                                                            href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                                            as={`${process.env.PUBLIC_URL}/shop/product-basic/${product.slug}`}
                                                        >
                                                            <a>
                                                                {product.name}
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    {product.selectedProductColor &&
                                                    product.selectedProductSize ? (
                                                        <div className="cart-item-variation">
                                                            <span>
                                                                Color:{" "}
                                                                {
                                                                    product.selectedProductColor
                                                                }
                                                            </span>
                                                            <span>
                                                                Size:{" "}
                                                                {
                                                                    product.selectedProductSize
                                                                }
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                    <p>
                                                        <span className="cart-count">
                                                            {product.quantity} x{" "}
                                                        </span>{" "}
                                                        <span className="discounted-price">
                                                            ₹{discountedPrice}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </CustomScroll>
                            </div>
                            {/*=======  subtotal calculation  =======*/}
                            <p className="cart-subtotal">
                                <span className="subtotal-title">
                                    Subtotal:
                                </span>
                                <span className="subtotal-amount">
                                    ₹{cartTotalPrice.toFixed(2)}
                                </span>
                            </p>
                            {/*=======  cart buttons  =======*/}
                            <div className="cart-buttons">
                                <Link
                                    href="/other/cart"
                                    as={process.env.PUBLIC_URL + "/other/cart"}
                                >
                                    <a>view cart</a>
                                </Link>
                                <Link
                                    href="/other/checkout"
                                    as={
                                        process.env.PUBLIC_URL +
                                        "/other/checkout"
                                    }
                                >
                                    <a>checkout</a>
                                </Link>
                            </div>
                            {/*=======  free shipping text  =======*/}
                            <p className="free-shipping-text">
                                Free Shipping on All Orders Over ₹1000!
                            </p>
                            {/* // JSON.stringify(cart) */}
                        </div>
                    ) : (
                        "no items"
                    )}
                </div>
            </div>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         cartItems: state.cartData,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteFromCart: (item, addToast) => {
//             dispatch(deleteFromCart(item, addToast));
//         },
//     };
// };

export default CartOverlay;
