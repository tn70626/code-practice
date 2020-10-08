function formatCartForDisplay(cart) {
  const cartArray = [];
  for (key in cart) {
    cartArray.push(Object.assign(cart[key], { name: key }));
  }

  const cartMap = cartArray.map((item) => {
    const toppings =
      item.Toppings.length >= 1 ? item.Toppings.join(', ') : 'No Toppings';
    return `${item.Name} (${toppings})`;
  });
  return cartMap;
}

const cart = {
  '14SCREEN': {
    Name: 'Large Hand Tossed Pizza',
    Qty: 1,
    Toppings: ['Pepperoni'],
    Price: 10,
  },
  P12IPAZA: {
    Name: 'Medium Pan Pizza',
    Qty: 1,
    Toppings: ['Onion', 'Spinach'],
    Price: 9,
  },
  B16PBIT: {
    Name: 'Parmesan Bread Bites',
    Qty: 1,
    Toppings: [],
    Price: 2.99,
  },
};

console.log(formatCartForDisplay(cart));
