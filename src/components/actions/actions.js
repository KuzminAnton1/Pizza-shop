const addPizzaList = (id, title, img) => {
  return {
    type: 'PIZZA_LIST',
    id: id,
    title: title,
    img: img,
  };
};

export { addPizzaList };
