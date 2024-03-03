
export const calTotalPrice = (priceList: Record<string, number>[]) => {
  let result = priceList.reduce((pre, current) => {
    let arg = (current.quantity * current.price)
    return pre + arg
  },0)
  return result
}

// export const calTotalPrice = (priceList: Record<string, number>[]) => {
//   let result = priceList.reduce((pre, current) => {
//     let totalPrice = (current.quantity * current.price);

//     return {
//       ...pre,
//       totalPrice: pre.totalPrice + totalPrice,
//     };
//   }, { totalPrice: 0 });

//   return result.totalPrice;
// };
