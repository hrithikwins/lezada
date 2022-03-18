import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosShuffle, IoIosSearch } from "react-icons/io";
import { Tooltip } from "react-tippy";
import ProductModal from "./ProductModal";
import { useContext } from "react";
import { CartContext } from "../../context/cart/cart-context";

const ProductGridList = ({ product, productId }) => {
    const [modalShow, setModalShow] = useState(false);
    const [cart, addItemToCart, removeItemFromCart] = useContext(CartContext);

    return (
        <Fragment>
            <Col lg={3} md={6} className={""}>
                <div className="product-grid">
                    {/*=======  single product image  =======*/}
                    <div className="product-grid__image">
                        <Link
                            href={`/shop/product-basic/[slug]?slug=${productId}`}
                            as={
                                process.env.PUBLIC_URL +
                                "/shop/product-basic/" +
                                productId
                            }
                        >
                            <a className="image-wrap">
                                <img
                                    src="https://images.pexels.com/photos/3819818/pexels-photo-3819818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    className="img-fluid"
                                    alt={product.name}
                                />
                                {/* {product.thumbImage.length > 1 ? (
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            product.thumbImage[1]
                                        }
                                        className="img-fluid"
                                        alt={product.name}
                                    />
                                ) : (
                                    ""
                                )} */}
                            </a>
                        </Link>
                        <div className="product-grid__floating-badges">
                            {product.discount && product.discount > 0 ? (
                                <span className="onsale">
                                    -{product.discount}%
                                </span>
                            ) : (
                                ""
                            )}
                            {product.new ? (
                                <span className="hot">New</span>
                            ) : (
                                ""
                            )}
                            {product.stock === 0 ? (
                                <span className="out-of-stock">out</span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="product-grid__floating-icons">
                            {/* add to wishlist */}
                            <Tooltip
                                title={"Add to wishlist"}
                                position="left"
                                trigger="mouseenter"
                                animation="shift"
                                arrow={true}
                                duration={200}
                            >
                                <button
                                    onClick={() =>
                                        addToWishlist(product, addToast)
                                    }
                                    className={""}
                                >
                                    <IoIosHeartEmpty />
                                </button>
                            </Tooltip>

                            {/* add to compare */}
                            <Tooltip
                                title={"Add to compare"}
                                position="left"
                                trigger="mouseenter"
                                animation="shift"
                                arrow={true}
                                duration={200}
                            >
                                <button
                                    onClick={() =>
                                        addToCompare(product, addToast)
                                    }
                                    className={""}
                                >
                                    <IoIosShuffle />
                                </button>
                            </Tooltip>

                            {/* quick view */}
                            <Tooltip
                                title="Quick view"
                                position="left"
                                trigger="mouseenter"
                                animation="shift"
                                arrow={true}
                                duration={200}
                            >
                                <button
                                    onClick={() => setModalShow(true)}
                                    className="d-none d-lg-block"
                                >
                                    <IoIosSearch />
                                </button>
                            </Tooltip>
                        </div>
                    </div>

                    {/*=======  single product content  =======*/}
                    <div className="product-grid__content">
                        <div className="title">
                            <h3>
                                <Link
                                    href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                    as={
                                        process.env.PUBLIC_URL +
                                        "/shop/product-basic/" +
                                        product.slug
                                    }
                                >
                                    <a>{product.name}</a>
                                </Link>
                            </h3>
                            {/* add to cart */}
                            <button
                                onClick={() => {
                                    addItemToCart(product);
                                }}
                            >
                                ADD TO CART
                            </button>

                            {/*
                            {product.affiliateLink ? (
                                <a href={product.affiliateLink} target="_blank">
                                    Buy now
                                </a>
                            ) : product.variation &&
                              product.variation.length >= 1 ? (
                                <Link
                                    href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                    as={
                                        process.env.PUBLIC_URL +
                                        "/shop/product-basic/" +
                                        product.slug
                                    }
                                >
                                    <a>Select Option</a>
                                </Link>
                            ) : product.stock && product.stock > 0 ? (
                                <button
                                    onClick={() => addToCart(product, addToast)}
                                    disabled={false}
                                >
                                    {"Add to cart"}
                                </button>
                            ) : (
                                <button disabled>Out of Stock</button>
                            )} */}
                        </div>
                        <div className="price">
                            <span className="main-price">
                                {product.category}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="product-list">
                    {/*=======  single product image  =======*/}
                    <div className="product-list__image">
                        {/* <Link
                            href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                            as={
                                process.env.PUBLIC_URL +
                                "/shop/product-basic/" +
                                product.slug
                            }
                        >
                            <a className="image-wrap">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
                                    className="img-fluid"
                                    style={{ height: "20px", width: "20px" }}
                                    alt={product.name}
                                />
                                {product.thumbImage.length > 1 ? (
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            product.thumbImage[1]
                                        }
                                        className="img-fluid"
                                        alt={product.name}
                                    />
                                ) : (
                                    ""
                                )}
                            </a>
                        </Link> */}
                        <div className="product-list__floating-badges">
                            {product.discount && product.discount > 0 ? (
                                <span className="onsale">
                                    -{product.discount}%
                                </span>
                            ) : (
                                ""
                            )}
                            {product.new ? (
                                <span className="hot">New</span>
                            ) : (
                                ""
                            )}
                            {product.stock === 0 ? (
                                <span className="out-of-stock">out</span>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    {/*=======  single product content  =======*/}
                    <div className="product-list__content">
                        {/* <div className="title">
                            <h3>
                                <Link
                                    href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                    as={
                                        process.env.PUBLIC_URL +
                                        "/shop/product-basic/" +
                                        product.slug
                                    }
                                >
                                    <a>{product.name}</a>
                                </Link>
                            </h3>
                        </div> */}
                        <div className="price">
                            <span className="main-price">₹{product.price}</span>
                        </div>
                    </div>
                </div>
            </Col>
            {/* product modal */}
            {/* <ProductModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                product={product}

                // discountedprice={discountedPrice}
                // productprice={productPrice}
                // cartitems={cartItems}
                // cartitem={cartItem}
                // wishlistitem={wishlistItem}
                // compareitem={compareItem}
                // addtocart={addToCart}
                // addtowishlist={addToWishlist}
                // deletefromwishlist={deleteFromWishlist}
                // addtocompare={addToCompare}
                // deletefromcompare={deleteFromCompare}
                // addtoast={addToast}
            /> */}
        </Fragment>
    );
};

export default ProductGridList;
