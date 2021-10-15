import { useEffect } from "react";
import { useState } from "react";

const useProduct = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  return [product, setproduct];
};
export default useProduct;
