const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");

const quotes = [
  {
    quote: "Elephant",
  },
  
  {
    quote: "Cow",
  },
  
  {
    quote: "Cat",
  },
 
  {
    quote: "Dog",
  },
 
  {
    quote: "Rabit",
  },
  
  {
    quote: "Bear",
  },
 
  {
    quote: "Lion",
  },
]

button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});

