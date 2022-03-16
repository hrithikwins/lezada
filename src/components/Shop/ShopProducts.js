import { ProductGridListWrapper } from "../../components/ProductThumb";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const ShopProducts = ({ layout }) => {
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
        <div className="shop-products">
            <Row className={layout}>
                <ProductGridListWrapper
                    products={productData}
                    bottomSpace="space-mb--50"
                />
            </Row>
        </div>
    );
};

export default ShopProducts;
