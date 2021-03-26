let shoppingList = new Map([
  ["Banana", 4],
  ["Pineapple", 2],
  ["Pear", 6],
  ["Carrot", 5],
  ["Apple", 9],
]);
let arrKey = [];
for (let col of shoppingList.entries()) {
  arrKey.push(col[0]);
  console.log(`groceries: ${col[0]}`);
}
let arrValue = [];
for (let col of shoppingList.entries()) {
  arrKey.push(col[1]);
  console.log(`groceries: ${col[1]}`);
}
for (let col of shoppingList.entries()) {
  console.log([col[0], col[1]]);
}

module.exports = { shoppingList, arrKey, arrValue };
