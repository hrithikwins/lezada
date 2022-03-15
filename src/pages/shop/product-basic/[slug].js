import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { LayoutTwo } from "../../../components/Layout";
import { getDiscountPrice } from "../../../lib/product";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import {
    ImageGalleryBottomThumb,
    ProductDescription,
    ProductDescriptionTab,
} from "../../../components/ProductDetails";
import { addToCart } from "../../../redux/actions/cartActions";
import {
    addToWishlist,
    deleteFromWishlist,
} from "../../../redux/actions/wishlistActions";
import {
    addToCompare,
    deleteFromCompare,
} from "../../../redux/actions/compareActions";
import products from "../../../data/products.json";
import axios from "axios";

const ProductBasic = ({ product }) => {
    // const [productData, setProductData] = useState([]);

    // useEffect(() => {
    //     async function searchProductById() {
    //         const result = await axios.post(
    //             "https://desicover.herokuapp.com/search-product-by-id",
    //             {
    //                 // privateId: "620b5208020c144f2d4bab5b",
    //                 privateId: slug,
    //             }
    //         );
    //         console.log("Usefevet" + slug);
    //         setProductData([result.data]);
    //         console.log(result.data);
    //     }
    //     searchProductById();
    // }, []);
    return (
        <LayoutTwo>
            {/* breadcrumb */}
            <BreadcrumbOne
                pageTitle={product.name}
                backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
            >
                <ul className="breadcrumb__list">
                    <li>
                        <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/shop/left-sidebar"
                            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                        >
                            <a>Shop</a>
                        </Link>
                    </li>
                    <li>{product.name}</li>
                </ul>
            </BreadcrumbOne>

            {/* product details */}
            <div className="product-details space-mt--r100 space-mb--r100">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            {/* image gallery bottom thumb */}
                            <ImageGalleryBottomThumb product={product} />
                        </Col>

                        <Col lg={6}>
                            {product.productData.name}
                            {/* {productData && productData.length > 0
                                ? JSON.stringify(
                                      productData[0]["productData"]["name"]
                                  )
                                : ""} */}
                            {/* {productData[0]["productData"]["name"]} */}
                            {/* {productData && productData.length > 0
                                ? JSON.stringify(productData)
                                : ""} */}

                            {/* product description */}
                            <ProductDescription product={product.productData} />
                            {/* productPrice={productPrice}

                                discountedPrice={discountedPrice}
                                cartItems={cartItems}
                                cartItem={cartItem}
                                wishlistItem={wishlistItem}
                                compareItem={compareItem}
                                addToast={addToast}
                                addToCart={addToCart}
                                addToWishlist={addToWishlist}
                                deleteFromWishlist={deleteFromWishlist}
                                addToCompare={addToCompare}
                                deleteFromCompare={deleteFromCompare} */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* product description tab */}
                            {/* <ProductDescriptionTab product={product} /> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutTwo>
    );
};

export default ProductBasic;

ProductBasic.getInitialProps = async (ctx) => {
    console.log(ctx.query.slug);
    const result = await axios.post(
        "https://desicover.herokuapp.com/search-product-by-id",
        {
            // privateId: "620b5208020c144f2d4bab5b",
            privateId: ctx.query.slug,
        }
    );
    return { product: result.data };
};
