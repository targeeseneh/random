var quotes = [
    {
     text: "You only live once, but if you do it right, once is enough.",
     author:"— Mae West."
    },
    {
     text: "Believe you can and you're halfway there.",
     author:"— Dr Seuss."
    },
    {
     text: "The nearer a man comes to a calm mind, the closer he is to strength.",
     author:"― Marcus Aurelius."
    },
    {
     text: "Your time is limited, don't waste it living someone else's life.",
     author:"― Steve Jobs."
    },
    {
     text: "If opportunity doesn’t knock, build a door.",
     author:"― Jane Austen."
    },
    {
     text: "To be trusted is a greater compliment than being loved.",
     author:"― Leo Tolstoy."
    },
    {
     text: "Life isn't about getting and having, it's about giving and being.",
     author:"― John McLaughlin."
    },
    {
     text: "It does not matter how slowly you go as long as you do not stop.",
     author:"― Confucius."
    },
    {
     text: "Raise your words, not voice. It is rain that grows flower, not thunder.",
     author:"― Rumi"
    },
    {
     text: "Be yourself; everyone else is already taken.",
     author:"― Walt Disney."
    }
 ];

  // Function to generate a random quote
 function generateRandomQuote() {
   var randomIndex = Math.floor(Math.random() * quotes.length);
   return quotes[randomIndex];
 }

 // Function to display the quote in the DOM
 function displayQuote() {
   var quoteContainer = document.querySelector('.quotes');
   var randomQuote = generateRandomQuote();
   quoteContainer.innerHTML = '<p><strong>' + randomQuote.text + '</strong> <br><br> ' + randomQuote.author + '</p>';
 }

 displayQuote();

 setInterval(displayQuote, 5000);

