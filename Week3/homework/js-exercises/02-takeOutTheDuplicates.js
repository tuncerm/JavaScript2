const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(array){
  return [...new Set(array).values()];
}

console.log(removeDuplicates(letters));
// Outputs ['a', 'b', 'c', 'd', 'e', 'f'];
