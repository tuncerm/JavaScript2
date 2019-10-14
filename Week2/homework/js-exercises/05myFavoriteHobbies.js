const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

const list = document.getElementById('my-hobbies');

function addToList(item){
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
}

myHobbies.forEach(addToList);
