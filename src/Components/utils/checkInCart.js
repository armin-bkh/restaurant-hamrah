const checkInCart = (cart, id) => {
  return cart.find((item) => item.id === id);
};

export default checkInCart;
