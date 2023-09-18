export const saveIndexMyCart = (customerId: string, cartId: string) => {
  localStorage.setItem(customerId, cartId);
};

export const getIndexMyCart = (customerId: string) => {
  const cartId = localStorage.getItem(customerId);
  return cartId;
};

export const deleteMyCart = (customerId: string) => {
  localStorage.removeItem(customerId);
};

export const saveIndexAnonimCart = (cartId: string) => {
  localStorage.setItem('anonimCartId', cartId);
};

export const getIndexAnonimCart = () => {
  const anonimCartId = localStorage.getItem('anonimCartId');
  return anonimCartId;
};

export const deleteAnonimCart = () => {
  localStorage.removeItem('anonimCart');
};
