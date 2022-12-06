import "./Shop.css";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <div className="shop">
        {/* <div> */}
        <Link to="/product-one">
          <h3 className="product">product one</h3>
        </Link>
        {/* </div> */}
        {/* <div> */}
        <h3 className="product">product two</h3>
        {/* </div> */}
        {/* <div> */}
        <h3 className="product">product three</h3>
        {/* </div> */}
      </div>
    </>
  );
}

export default Shop;
