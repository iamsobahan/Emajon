import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Cost from "../Cost/Cost";
import { addToData, getStoreData } from "../utilities/database";
import "./Shop.css";

const Shop = () => {
  const [product, setproduct] = useState([]);
  const [cart, setcart] = useState([]);
  const [displays, setdisplay] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
        setdisplay(data);
      });
  }, []);

  useEffect(() => {
    if (product.length) {
      const arr = [];
      const localData = getStoreData();

      for (const key in localData) {
        const allKey = product.find((products) => products.key === key);
        if (allKey) {
          const quantity = localData[key];
          allKey.quantity = quantity;
          arr.push(allKey);
        }
      }
      setcart(arr);
    }
  }, [product]);
  const clickhandler = (product) => {
    const exist = cart.find((pd) => pd.key === product.key);
    let newcart = [];
    if (exist) {
      const remain = cart.filter((pd) => pd.key !== product.key);
      exist.quantity += 1;
      newcart = [...remain, product];
    } else {
      product.quantity = 1;
      newcart = [...cart, product];
    }

    setcart(newcart);
    addToData(product.key);
  };

  const changehandler = (event) => {
    const val = event.target.value;
    const matchVal = product.filter((products) => products.name.includes(val));
    setdisplay(matchVal);
  };
  return (
    <div>
      <div className="inputMother">
        <input
          onChange={changehandler}
          type="text"
          placeholder="type here for search"
        />
      </div>
      <div className="Shop-grid">
        <div className="hi">
          {displays.map((sproduct) => (
            <Cart
              clickhandler={clickhandler}
              key={sproduct.key}
              product={sproduct}
            ></Cart>
          ))}
        </div>
        <div>
          <Cost cart={cart}>
            <Link to="/review">
              <button>Order Review</button>
            </Link>
          </Cost>
        </div>
      </div>
    </div>
  );
};

export default Shop;
