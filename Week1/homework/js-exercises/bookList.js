const books = [
  {
    title: "Anna Karenina",
    alreadyRead: true,
    author: "Leo Tolstoy"
  },
  {
    title: "Madame Bovary",
    alreadyRead: false,
    author: "Gustave Flaubert"
  },
  {
    title: "War and Peace",
    alreadyRead: true,
    author: "Leo Tolstoy"
  },
  {
    title: "The Great Gatsby",
    alreadyRead: false,
    author: "F. Scott Fitzgerald"
  },
  {
    title: "Lolita",
    alreadyRead: false,
    author: "Vladimir Nabokov"
  },
  {
    title: "Middlemarch",
    alreadyRead: true,
    author: "George Eliot"
  },
  {
    title: "The Adventures of Huckleberry Finn",
    alreadyRead: true,
    author: "Mark Twain"
  },
  {
    title: "The Stories of Anton Chekhov",
    alreadyRead: false,
    author: "Anton Chekhov"
  },
  {
    title: "In Search of Lost Time",
    alreadyRead: true,
    author: "Marcel Proust"
  },
  {
    title: "Hamlet",
    alreadyRead: true,
    author: "William Shakespeare"
  }
]

const body = document.body;
const ul = generateElement('ul');

// 1. Iterate through the array of books.
for (let book of books) {
  // 3. Use an <ul> and <li> to display the books.
  const li = generateElement('li');
  li.appendChild(generateBook(book));
  // 4. Add an <img> to each book that links to a URL of the book cover.
  li.appendChild(generateElement('img', "", 'image', {name: 'src', value: `img/${generateID(book.title)}.jpg`}));
  ul.appendChild(li);
}

body.append(ul);

function generateID(str){
  return str.toLowerCase().split(' ').join('_');
}

function generateBook(item){
  // 2. For each book, create a p element with the book title and author and append it to the page.
  const book = generateElement('p', `${item.title} by ${item.author}`, item.alreadyRead ? 'read' : 'unread');
  return book;
}

function generateElement(tag, content = "", cl, att){
  const el = document.createElement(tag);
  el.textContent = content;
  if(cl){
    el.classList.add(cl);
  }
  if (att) {
    el.setAttribute(att.name, att.value);
  }
  return el;
}
