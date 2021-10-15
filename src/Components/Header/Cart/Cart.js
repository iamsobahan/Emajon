import React from "react";
import Rating from "react-rating";
import "./Cart.css";

const Cart = (props) => {
  const { star, img, name, price, seller, stock } = props.product;
  return (
    <div className="Cart_flex">
      <div className="img-div">
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="h2">{name}</h2>
        <h5>by: {seller} </h5>
        <h4>${price} </h4>

        <h5>only {stock} left in stock -order soon</h5>
        <div className="dFlex">
          <button onClick={() => props.clickhandler(props.product)}>
            add to cart
          </button>
          <Rating
            initialRating={star}
            emptySymbol="far fa-star hello"
            fullSymbol="fas fa-star hello"
            readonly
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
