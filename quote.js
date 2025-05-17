// quote.js
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" }
];

function showQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[idx].text;
  document.getElementById('author').textContent = `— ${quotes[idx].author}`;
}

document.addEventListener('DOMContentLoaded', showQuote);
