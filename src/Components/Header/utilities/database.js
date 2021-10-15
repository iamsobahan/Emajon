const getData = () => localStorage.getItem("shopping_cart");
const updatCart = (val) => {
  localStorage.setItem("shopping_cart", JSON.stringify(val));
};

const getStoreData = () => {
  const exist = getData();
  return exist ? JSON.parse(exist) : {};
};
const removeId = (id) => {
  const exist = getData();
  if (!exist) {
  } else {
    const shopping_cart = JSON.parse(exist);
    delete shopping_cart[id];
    updatCart(shopping_cart);
  }
};
const clearCart = () => localStorage.removeItem("shopping_cart");

const addToData = (id) => {
  const exist = getData();
  let shopping_cart = {};
  if (!exist) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exist);
    if (shopping_cart[id]) {
      const newId = shopping_cart[id] + 1;
      shopping_cart[id] = newId;
    } else {
      shopping_cart[id] = 1;
    }
  }
  updatCart(shopping_cart);
};

export { addToData, clearCart, removeId, getStoreData };
