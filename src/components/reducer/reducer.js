const initialState = {
  pizzaList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PIZZA_LIST':
      const id = action.id;
      const title = action.title;
      const img = action.img;
      const index = state.pizzaList.findIndex((item) => item.id === id);
      if (index < 0) {
        const newOrder = {
          id: id,
          title: title,
          img: img,
          quantity: 1,
        };
        return {
          ...state,
          pizzaList: [...state.pizzaList, newOrder],
        };
      } else {
        const repeatOrder = state.pizzaList.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return { ...item };
          }
        });
        return {
          ...state,
          pizzaList: [...repeatOrder],
        };
      }
    default:
      return state;
  }
};

export default reducer;
