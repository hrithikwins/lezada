import Link from "next/link";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { LayoutFive } from "../../components/Layout";
import { ShopInfo } from "../../components/Shop";
import { getProducts } from "../../lib/product";
import { HeroSliderTwo } from "../../components/HeroSlider";
import { CategorySlider } from "../../components/Category";
import { SectionTitleOne } from "../../components/SectionTitle";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { BlogPostSlider } from "../../components/Blog";
import categoryData from "../../data/categories/category-one.json";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-two.json";
import { CreativeContent } from "../../components/HomeContent";
import ProductGrid from "../../components/ProductThumb/ProductGrid";
import ProductGridFour from "../../components/ProductThumb/ProductGridFour";
import axios from "axios";

const Trending = ({ products }) => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        async function getAllProducts() {
            const result = await axios.get(
                "https://desicover.herokuapp.com/get-all-products"
            );
            setProductData(result.data);
            console.log(result.data);
        }
        getAllProducts();
    }, []);

    return (
        <LayoutFive>
            {/* hero slider */}
            <HeroSliderTwo
                sliderData={heroSliderData}
                spaceBottomClass="space-mb--50"
            />
            {/* category slider */}
            <CategorySlider
                categoryData={categoryData}
                spaceBottomClass="space-mb--r100"
            />
            <CreativeContent />

            {/* products */}
            <SectionTitleOne
                title="New Arrivals"
                subtitle="Find your fav products by Desicovers "
            />
            <div className="products-wrapper space-mb--r100">
                <Container className="wide">
                    <Row className="five-column row">
                        {/* <ProductGridFour /> */}
                        {productData.map((data) => (
                            <Link href="/description">
                                <div className="element-item col-4">
                                    <div className="ecommerce_product_grid">
                                        <ul className="product_label ul_li clearfix">
                                            <li data-bg-color="#93be2b">New</li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                id="ptab1_1"
                                                className="tab-pane active"
                                            >
                                                <div className="item_image ">
                                                    <img
                                                        src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=lis"
                                                        alt="image_not_found"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                            {/* <div id="ptab1_2" className="tab-pane fade">
                            <div className="item_image">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="image_not_found"
                                />
                            </div>
                        </div>
                        <div id="ptab1_3" className="tab-pane fade">
                            <div className="item_image">
                                <img
                                    src="https://images.pexels.com/photos/4195323/pexels-photo-4195323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="image_not_found"
                                />
                            </div>
                        </div> */}
                                            {/* <ul className="product_action_btns ul_li_center clearfix">
                            <li>
                                <a
                                    className="tooltips"
                                    data-placement="top"
                                    title="Add To Wishlist"
                                    href="#!"
                                >
                                    <i className="fal fa-heart" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="tooltips"
                                    data-placement="top"
                                    title="Add To Cart"
                                    href="#!"
                                >
                                    <i className="fal fa-shopping-basket" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="tooltips"
                                    data-placement="top"
                                    title="Quick View"
                                    href="#!"
                                    data-toggle="modal"
                                    data-target="#quickview_modal"
                                >
                                    <i className="fal fa-search" />
                                </a>
                            </li>
                        </ul> */}
                                        </div>
                                        <div className="item_content">
                                            <h3 className="item_title">
                                                <a href="#!">
                                                    {data.productData.name}
                                                </a>
                                            </h3>
                                            <span className="item_price">
                                                <strong>
                                                    {data.productData.price}
                                                </strong>
                                                <del>
                                                    {data.productData.price}
                                                </del>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Row>
                    <div className="text-center">
                        {/* TODO: set the page link */}
                        <Link
                            href="/shop/left-sidebar"
                            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                        >
                            <a className="lezada-loadmore-button">
                                <IoIosAdd /> SEE MORE ...
                            </a>
                        </Link>
                    </div>
                </Container>
            </div>

            {/* blog post slider */}
            <BlogPostSlider
                blogData={blogData}
                spaceBottomClass="space-mb--50"
            />

            {/*shop info*/}
            <ShopInfo />
        </LayoutFive>
    );
};

// const mapStateToProps = (state) => {
// const products = state.productData;
// return {
// products: getProducts(products, "fashion", "popular", 10),
// };
// };

export default Trending;
