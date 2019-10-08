const quotes = [
  {
    quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    author: "John Keats"
  },
  {
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "There is nothing permanent except change.",
    author: "Heraclitus"
  },
  {
    quote: "You cannot shake hands with a clenched fist.",
    author: "Indira Gandhi"
  },
  {
    quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
    author: "A. P. J. Abdul Kalam"
  },
  {
    quote: "It is better to be feared than loved, if you cannot be both.",
    author: "Niccolo Machiavelli"
  },
  {
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
    author: "Amelia Earhart"
  },
  {
    quote: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
    author: "Henry James"
  },
  {
    quote: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  },
  {
    quote: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen"
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    author: "Edgar Allan Poe"
  },
  {
    quote: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
    author: "Francis of Assisi"
  },
  {
    quote: "The only journey is the one within.",
    author: "Rainer Maria Rilke"
  },
  {
    quote: "Good judgment comes from experience, and a lot of that comes from bad judgment.",
    author: "Will Rogers"
  },
  {
    quote: "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
    author: "William Blake"
  },
  {
    quote: "Life without love is like a tree without blossoms or fruit.",
    author: "Khalil Gibran"
  },
  {
    quote: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
  },
  {
    quote: "Love cures people - both the ones who give it and the ones who receive it.",
    author: "Karl A. Menninger"
  },
  {
    quote: "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
    author: "Satchel Paige"
  },
  {
    quote: "It is far better to be alone, than to be in bad company.",
    author: "George Washington"
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill"
  },
  {
    quote: "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.",
    author: "Thomas Carlyle"
  },
  {
    quote: "Independence is happiness.",
    author: "Susan B. Anthony"
  },
  {
    quote: "The supreme art of war is to subdue the enemy without fighting.",
    author: "Sun Tzu"
  },
  {
    quote: "Keep your face always toward the sunshine - and shadows will fall behind you.",
    author: "Walt Whitman"
  },
  {
    quote: "Being entirely honest with oneself is a good exercise.",
    author: "Sigmund Freud"
  },
  {
    quote: "Happiness can exist only in acceptance.",
    author: "George Orwell"
  },
  {
    quote: "Love has no age, no limit; and no death.",
    author: "John Galsworthy"
  },
  {
    quote: "You can't blame gravity for falling in love.",
    author: "Albert Einstein"
  },
  {
    quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: "Aldous Huxley"
  },
  {
    quote: "Honesty is the first chapter in the book of wisdom.",
    author: "Thomas Jefferson"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr."
  },
  {
    quote: "A new command I give you: Love one another. As I have loved you, so you must love one another.",
    author: "Jesus Christ"
  },
  {
    quote: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    author: "Edith Wharton"
  },
  {
    quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author: "Samuel Beckett"
  },
  {
    quote: "God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    author: "Voltaire"
  },
  {
    quote: "Coming together is a beginning; keeping together is progress; working together is success.",
    author: "Edward Everett Hale"
  },
  {
    quote: "Change your life today. Don't gamble on the future, act now, without delay.",
    author: "Simone de Beauvoir"
  },
  {
    quote: "Not all those who wander are lost.",
    author: "J. R. R. Tolkien"
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    quote: "There is nothing on this earth more to be prized than true friendship.",
    author: "Thomas Aquinas"
  },
  {
    quote: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell"
  },
  {
    quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
  },
  {
    quote: "There is only one happiness in this life, to love and be loved.",
    author: "George Sand"
  },
  {
    quote: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle"
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    quote: "Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.",
    author: "Marcel Proust"
  },
  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  {
    quote: "Wise men speak because they have something to say; Fools because they have to say something.",
    author: "Plato"
  },
  {
    quote: "The World is my country, all mankind are my brethren, and to do good is my religion.",
    author: "Thomas Paine"
  },
  {
    quote: "When we are no longer able to change a situation - we are challenged to change ourselves.",
    author: "Viktor E. Frankl"
  },
  {
    quote: "Problems are not stop signs, they are guidelines.",
    author: "Robert H. Schuller"
  },
  {
    quote: "What we achieve inwardly will change outer reality.",
    author: "Plutarch"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote: "We love life, not because we are used to living but because we are used to loving.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    quote: "We know what we are, but know not what we may be.",
    author: "William Shakespeare"
  },
  {
    quote: "It's not what you look at that matters, it's what you see.",
    author: "Henry David Thoreau"
  },
  {
    quote: "A single rose can be my garden... a single friend, my world.",
    author: "Leo Buscaglia"
  },
  {
    quote: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    author: "Swami Vivekananda"
  },
  {
    quote: "Friends show their love in times of trouble, not in happiness.",
    author: "Euripides"
  },
  {
    quote: "You don't choose your family. They are God's gift to you, as you are to them.",
    author: "Desmond Tutu"
  },
  {
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard"
  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw"
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    author: "Confucius"
  },
  {
    quote: "A kiss is a lovely trick designed by nature to stop speech when words become superfluous.",
    author: "Ingrid Bergman"
  },
  {
    quote: "For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul.",
    author: "Judy Garland"
  },
  {
    quote: "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    author: "A. A. Milne"
  },
  {
    quote: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    author: "John F. Kennedy"
  },
  {
    quote: "Life's most persistent and urgent question is, 'What are you doing for others?'",
    author: "Martin Luther King, Jr."
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Happiness resides not in possessions, and not in gold, happiness dwells in the soul.",
    author: "Democritus"
  },
  {
    quote: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    author: "William Arthur Ward"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
    author: "Dr. Seuss"
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "Love isn't something you find. Love is something that finds you.",
    author: "Loretta Young"
  },
  {
    quote: "Blessed are the hearts that can bend; they shall never be broken.",
    author: "Albert Camus"
  },
  {
    quote: "Do all things with love.",
    author: "Og Mandino"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle"
  },
  {
    quote: "Where there is love there is life.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "One of the most beautiful qualities of true friendship is to understand and to be understood.",
    author: "Lucius Annaeus Seneca"
  },
  {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke"
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha"
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
  },
  {
    quote: "Nothing is impossible, the word itself says 'I'm possible'!",
    author: "Audrey Hepburn"
  },
  {
    quote: "Find a place inside where there's joy, and the joy will burn out the pain.",
    author: "Joseph Campbell"
  },
  {
    quote: "Try to be a rainbow in someone's cloud.",
    author: "Maya Angelou"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    quote: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.",
    author: "Oscar Wilde"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller"
  }
];
