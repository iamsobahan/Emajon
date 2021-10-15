import React from "react";
import Rating from "react-rating";

const Productreview = (props) => {
  const { name, quantity, price, star, key } = props.product;
  const { clickhandler } = props;
  return (
    <div className="Cart_flex">
      <div>
        <h2 className="h2">{name}</h2>

        <h4>${price} </h4>

        <h5>Quantity : {quantity}</h5>

        <div className="dFlex">
          <button onClick={() => clickhandler(key)}>remove</button>
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

export default Productreview;
