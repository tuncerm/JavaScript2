function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = Array.from({length: stopIndex-startIndex + 1}, (_, k)=> k + startIndex).map(i=>{
        if(!(i % 3)){
          threeCallback();
        }
        if(!(i % 5)){
          fiveCallback();
        }
  });
}

threeFive(10, 15, ()=>console.log("sayThree"), ()=>console.log("sayFive"));
