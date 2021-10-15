import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useProduct from "../../../Hooks/useProduct";
import Cost from "../Cost/Cost";
import Productreview from "../Productreview/Productreview";
import { clearCart, removeId } from "../utilities/database";

const Review = () => {
  const [product] = useProduct();
  const [cart, setcart] = useCart(product);
  const clickhandler = (key) => {
    const removecart = cart.filter((product) => product.key !== key);
    setcart(removecart);
    removeId(key);
  };

  const placehandler = () => {
    setcart([]);
    clearCart();
  };

  return (
    <div>
      <div className="Shop-grid">
        <div className="hi">
          {cart.map((product) => (
            <Productreview
              key={product.name}
              product={product}
              clickhandler={clickhandler}
            ></Productreview>
          ))}
        </div>

        <div>
          <Cost cart={cart}>
            <Link to="./placeorder">
              <button onClick={placehandler}>Place Order</button>
            </Link>
          </Cost>
        </div>
      </div>
    </div>
  );
};

export default Review;
