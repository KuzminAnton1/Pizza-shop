import React from 'react';

import './menu-list.scss';
import MenuItem from './menu-item';
import marg from '../../../assets/img/pizzas/margarita.webp';
import caprisious from '../../../assets/img/pizzas/capricious.webp';
import neopol from '../../../assets/img/pizzas/neapolitan.jpg';
import regina from '../../../assets/img/pizzas/regina.webp';
import euro from '../../../assets/img/pizzas/europen.webp';
import peper from '../../../assets/img/pizzas/peperoni.jpeg';
import mimoza from '../../../assets/img/pizzas/mimoza.webp';
import medit from '../../../assets/img/pizzas/mediter.webp';
import capreze from '../../../assets/img/pizzas/capreze.webp';
import fullStar from '../../../assets/icons/full-star.png';
import halfStar from '../../../assets/icons/half-star.png';
import emptyStar from '../../../assets/icons/empty-star.png';

const MenuList = () => {
  const pizzaTitles = [
    'Margarita pizza',
    'Capricious pizza',
    'Neopolitian pizza',
    'Regina"s pizza',
    'European pizza',
    'Peperoni pizza',
    'Mimoza pizza',
    'Mediterranean pizza',
    'Capreze pizza',
  ];
  const pizzaImg = [
    marg,
    caprisious,
    neopol,
    regina,
    euro,
    peper,
    mimoza,
    medit,
    capreze,
  ];
  const id = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="menu-list">
      <h2 className="menu-list__title">dishes</h2>
      <h2 className="menu-list__subtitle">pizza's menu</h2>
      <div className="menu-list__divider"></div>
      <div className="menu-list__wrap">
        <MenuItem
          key={id[0]}
          name={pizzaTitles[0]}
          img={pizzaImg[0]}
          id={id[0]}
          reiting={[fullStar, fullStar, fullStar, fullStar, emptyStar]}
          descr={
            'This is a classic version of Italian pizza on a thin dough with a minimal set of ingredients. It consists of tomatoes, mozzarella, basil and olive oil.'
          }
        />
        <MenuItem
          key={id[1]}
          name={pizzaTitles[1]}
          img={pizzaImg[1]}
          id={id[1]}
          reiting={[fullStar, fullStar, fullStar, emptyStar, emptyStar]}
          descr={
            'The pizza consists of artichokes, black olives and mushrooms, as well as tomatoes and cheese. This pizza is perfect for vegetarians, it is very tasty and satisfying, thanks to the combination of mushrooms and tomatoes.'
          }
        />
        <MenuItem
          key={id[2]}
          name={pizzaTitles[2]}
          img={pizzaImg[2]}
          id={id[2]}
          reiting={[fullStar, fullStar, fullStar, fullStar, fullStar]}
          descr={
            "As part of a real Neapolitan pizza, you will not find anything but traditional parmesan cheese, tomatoes, oregano, anchovies, olive oil and basil. Some pizzerias add canned fish there, but this is a departure from the classic recipe. And a real 'Neapolitano' is cooked on firewood."
          }
        />
        <MenuItem
          key={id[3]}
          name={pizzaTitles[3]}
          img={pizzaImg[3]}
          id={id[3]}
          reiting={[fullStar, fullStar, fullStar, halfStar, emptyStar]}
          descr={
            'It was first established in New England, where the world-famous pizza chain Regina was later formed. It consists of tomatoes, mozzarella, champignons, ham, oregano and black olives.'
          }
        />
        <MenuItem
          key={id[4]}
          name={pizzaTitles[4]}
          img={pizzaImg[4]}
          id={id[4]}
          reiting={[fullStar, fullStar, fullStar, fullStar, fullStar]}
          descr={
            'European pizza wonderfully combines the sophistication of England, the hot temperament of Italy and the affluence of Germany. The European pizza may contain onions, herbs and mushrooms, all under a layer of Mozzarella cheese.'
          }
        />
        <MenuItem
          key={id[5]}
          name={pizzaTitles[5]}
          img={pizzaImg[5]}
          id={id[5]}
          reiting={[fullStar, fullStar, fullStar, fullStar, fullStar]}
          descr={
            'The homeland of this type of pizza is the north of Italy. The filling is based on spicy salami of the same name, prosciutto ham or ham, mozzarella and tomato sauce.'
          }
        />
        <MenuItem
          key={id[6]}
          name={pizzaTitles[6]}
          img={pizzaImg[6]}
          id={id[6]}
          reiting={[fullStar, fullStar, fullStar, fullStar, emptyStar]}
          descr={
            'Delicious and satisfying closed pizza, which is based on cream sauce, tomatoes, chicken and sweet corn.'
          }
        />
        <MenuItem
          key={id[7]}
          name={pizzaTitles[7]}
          img={pizzaImg[7]}
          id={id[7]}
          reiting={[fullStar, fullStar, fullStar, fullStar, halfStar]}
          descr={
            'Beloved by Italians, but still an international pizza, although Italy and America have been fighting for the title of being called its homeland for a long time. The filling must contain raw vegetables: tomatoes, bell peppers, asparagus and mozzarella cheese.'
          }
        />
        <MenuItem
          key={id[8]}
          name={pizzaTitles[8]}
          img={pizzaImg[8]}
          id={id[8]}
          reiting={[fullStar, fullStar, fullStar, emptyStar, emptyStar]}
          descr={
            'It has a fresh light taste and bright appearance, and the filling repeats the classic caprese salad: tomato, mozzarella slices and olives. All this is laid out on a traditional tomato sauce.'
          }
        />
      </div>
    </section>
  );
};

export default MenuList;
