import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
          
        </li>
        <li className="position-relative">
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Products</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
              <li>
                <Link
                  href="/element/product-categories"
                  as={process.env.PUBLIC_URL + "/element/product-categories"}
                >
                  <a>Mugs</a>
                </Link>
              </li>
              <li>
                <Link
                  href="/element/product-sliders"
                  as={process.env.PUBLIC_URL + "/element/product-sliders"}
                >
                  <a>PopSockets</a>
                </Link>
              </li>
              <li>
                <Link
                  href="/element/product-tabs"
                  as={process.env.PUBLIC_URL + "/element/product-tabs"}
                >
                  <a>Tshirts</a>
                </Link>
              </li>
              <li>
                <Link
                  href="/element/product-widgets"
                  as={process.env.PUBLIC_URL + "/element/product-widgets"}
                >
                  <a>Covers</a>
                </Link>
              </li>   
          </ul>
        </li>
        
        <li>
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a>Shop</a>
          </Link>
        </li>   
        <li>
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>Blogs</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
