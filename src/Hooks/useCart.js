import { useEffect } from "react";
import { useState } from "react";
import { getStoreData } from "../Components/Header/utilities/database";

const useCart = (products) => {
  const [cart, setcart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const getData = getStoreData();

      const storecart = [];
      for (const key in getData) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = getData[key];
          addedProduct.quantity = quantity;
          storecart.push(addedProduct);
        }
      }
      setcart(storecart);
    }
  }, [products]);

  return [cart, setcart];
};

export default useCart;
