window.onload = function(){
  const span = document.getElementById('time');
  setInterval(function(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    span.textContent= `${format(h)}:${format(m)}:${format(s)}`;
  }, 1000);
}

function format(n){
  return n > 9 ? n : `0${n}`;
}
