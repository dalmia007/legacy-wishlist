export const addWish = (wish) => {
  return {
    type: 'ADD_WISH',
    wish
  };
};

export const setWishes = (wishList) => {
  return {
    type: 'SET_WISHES',
    wishList
  };
};