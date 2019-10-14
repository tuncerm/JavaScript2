const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

function calcPrice(obj){
  return obj.duration * 25 / 60;
}

function add(a, b) {
  return a + b;
}

const total = mondayTasks.map(calcPrice).reduce(add, 0).toFixed(2);
console.log(total);
