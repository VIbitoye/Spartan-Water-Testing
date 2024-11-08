// src/data/cartItems.js
import waterKits from './waterKits';

const cartItems = [
  {
    id: waterKits[0].id,
    name: waterKits[0].name,
    price: waterKits[0].price,
    image: waterKits[0].image,
    quantity: 1
  },
  {
    id: waterKits[1].id,
    name: waterKits[1].name,
    price: waterKits[1].price,
    image: waterKits[1].image,
    quantity: 2
  },
  {
    id: waterKits[2].id,
    name: waterKits[2].name,
    price: waterKits[2].price,
    image: waterKits[2].image,
    quantity: 1
  }
];

export default cartItems;
