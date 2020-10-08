/**
 * Array Methods
 */

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1500 },
  { name: 'iPad', price: 1000 },
  { name: 'Remote', price: 10 },
];

const numbers = [1, 2, 3, 4, 5];
/**
 * Includes Function
 */

const includeTwo = numbers.includes(2);
console.log('Does numbers include 2?', includeTwo);

/**
 * Reduce Method
 */

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log('total from reduce: ', total);

/**
 * Every method
 * Checks every item
 */

const cheapItems = items.every((item) => {
  return item.price <= 1000;
});

console.log('All items are less than $1000: ', cheapItems);

/**
 * Some method
 * if anything returns true, the entire thing is true
 */

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

console.log('Are some items less than $100: ', hasInexpensiveItems);

/**
 * For Each
 */

const priceList = items.forEach((item) => {
  console.log(item.price);
});

/**
 * Find Method
 * returns the first item that matches the return
 */

const findBook = items.find((item) => {
  return item.name === 'Book';
});

console.log('Find book', findBook);

/**
 * Map Method
 */

const itemName = items.map((item) => {
  return item.name;
});

console.log('Mapped name: ', itemName);

/**
 * Filter Method
 */

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log('Filtered items priced under 100 ', filteredItems);
