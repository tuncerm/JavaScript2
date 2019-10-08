'use strict';
const quote = document.querySelector('.qd');
const author = document.querySelector('.ad');
function quoter(){
  const num = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[num].quote;
  author.textContent = quotes[num].author;
}
quoter();
