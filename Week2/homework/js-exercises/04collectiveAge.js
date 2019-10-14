// Have you ever wondered how old the HackYourFuture team members are? Or better yet: what the collective age is? Let's find out!

const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

// Instead of map and reduce, Let's make it complicated!!!
function add(array){
  return array.length === 1 ? array[0] : array[0] + add(array.splice(1));
}

function getAge(item) {
  return item.age;
}

function print(num){
  console.log()
}

// - Write a program that calculates the combined age of every member
// - It should contain a function that takes a callback
function calculatePrintAges(array, callback){
  // - Make use of the `map` function to get the ages
  const ages = array.map(getAge);

  // I am not sure if a callback should return a value to the caller.
  // - The callback adds all the ages together and returns the number
  const sum = callback(ages);

  // - The main function should log the string "The collective age of the HYF team is: [number]" to the console, and afterwards return the number
  console.log(`The collective age of the HYF team is: ${sum}`);
  return sum;
}

calculatePrintAges(hackYourFutureMembers, add);
