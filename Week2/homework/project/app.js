let isRunning = false;
let time = 1500;
let timer = null;
const canvas = document.getElementById('clock');
const drawDigit = (canvas, x, num) => {
  if (!canvas.getContext) {
    return false;
  }
  const y = 25;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "#FFF";
  switch (num) {
    case 0:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x + 25 , y + 25, 50, 125);
      break;
    case 1:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x , y, 75, 175);
      break;
    case 2:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x , y + 25, 75, 50);
      ctx.clearRect(x + 25 , y + 100, 75, 50);
      break;
    case 3:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x , y + 25, 75, 50);
      ctx.clearRect(x , y + 100, 75, 50);
      break;
    case 4:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x + 25, y , 50, 75);
      ctx.clearRect(x , y + 100, 75, 75);
      break;
    case 5:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x + 25, y + 25, 75, 50);
      ctx.clearRect(x , y + 100, 75, 50);
      break;
    case 6:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x + 25, y + 25, 75, 50);
      ctx.clearRect(x + 25, y + 100, 50, 50);
      break;
    case 7:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x, y + 25, 75, 150);
      break;
    case 8:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x + 25, y + 25, 50, 50);
      ctx.clearRect(x + 25, y + 100, 50, 50);
      break;
    case 9:
      ctx.fillRect(x, y, 100, 175);
      ctx.clearRect(x + 25, y + 25, 50, 50);
      ctx.clearRect(x, y + 100, 75, 50);
      break;
    case ':':
      ctx.clearRect(x, y, 100, 175);
      ctx.fillRect(x, y + 50, 25, 25);
      ctx.fillRect(x, y + 125, 25, 25);
      break;
    case 'END':
      ctx.clearRect(0,0, 575, 225);
      ctx.font = "100px monospace";
      ctx.fillText("Time's up!", 25, 150);
      break;
    default:
    ctx.fillStyle = "#000";
    ctx.clearRect(x, y, 100, 175);
    ctx.fillRect(x, y + 50, 25, 25);
    ctx.fillRect(x, y + 125, 25, 25);
    ctx.fillStyle = "#FFF";
  }
}

function changeTime(ev){
  const value = +ev.target.getAttribute('data');
  if (isRunning) {
      return;
  }
  time += value;
  if (time < 0) {
    time = 0;
  }
  if (time > 5999) {
    time = 5999;
  }
  updateCanvas();
}

async function updateCanvas(){
  drawDigit(canvas, 25, Math.floor(time / 600));
  drawDigit(canvas, 150, Math.floor((time / 60) % 10));
  drawDigit(canvas, 275, time % 2 === 0 ? ":" : "");
  drawDigit(canvas, 325, Math.floor((time % 60) / 10));
  drawDigit(canvas, 450, Math.floor(time % 10));
}

function start(){
  if (isRunning || time === 0) {
    return;
  }
  isRunning = true;
  timer = setInterval(()=>{
    time--;
    updateCanvas();
    if (time === 0) {
      drawDigit(canvas, 0, 'END');
      clearInterval(timer);
    }
  }, 1000);
}

function stop() {
  clearInterval(timer);
  isRunning = false;
}

updateCanvas();
document.querySelectorAll('.btn').forEach(item => item.addEventListener('click', changeTime, false));
document.getElementById('btn-start').addEventListener('click', start);
document.getElementById('btn-stop').addEventListener('click', stop);
