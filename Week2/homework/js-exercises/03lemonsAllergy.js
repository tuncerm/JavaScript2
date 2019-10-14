const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function filterLemon(item) {
  return item.toLowerCase() !== "lemon";
}

console.log(`My mom bought me a fruit basket, containing ${fruitBasket.filter(filterLemon).join(', ')} !`);
