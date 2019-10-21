function createBase(base) {
  return function(num){
    return console.log(base + num);
  }
}
const addSix = createBase(6);
addSix(9);
addSix(18);
addSix(30);
