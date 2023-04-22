//Solution-1
// function calculate(data) {
//   const discount = data.discount;
//   let discountedPrice = 0;
//   data.products.forEach((product) => {
//     discountedPrice += product.price * discount;
//   });
//   return discountedPrice;
// }

//Solution-2
function calculate(data) {
  const discount = 1 - data.discount;
  let discountedPrice = data.products.reduce((total, product) => {
    return total + product.price * discount;
  }, 0);
  return discountedPrice;
}

const cartList = {
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
};

console.log(calculate(cartList));
