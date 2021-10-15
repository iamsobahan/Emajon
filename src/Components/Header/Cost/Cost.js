import React from "react";
import "./Cost.css";

const Cost = (props) => {
  const { cart } = props;
  let total = 0;
  let totalQuantity = 0;
  for (const element of cart) {
    if (!element.quantity) {
      element.quantity = 1;
    }
    total += element.price * element.quantity;
    totalQuantity = totalQuantity + element.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const subtotal = total + shipping + tax;

  return (
    <div className="fixed">
      <h3>Order summary :</h3>
      <h5>Items ordered : {totalQuantity}</h5>
      <p>total : ${total.toFixed(2)} </p>
      <p>Shipping : ${shipping.toFixed(2)} </p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h3>Sub Total : ${subtotal.toFixed(2)}</h3>
      {props.children}
    </div>
  );
};

export default Cost;
