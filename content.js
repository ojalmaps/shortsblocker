// content.js
// Displays a motivational quote overlay on YouTube Shorts pages and removes it when navigating away

function showMotivationalOverlay() {
  // Remove existing overlay if present
  const existing = document.getElementById('motivation-overlay');
  if (existing) existing.remove();

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
  const idx = Math.floor(Math.random() * quotes.length);
  const quote = quotes[idx];

  const overlay = document.createElement('div');
  overlay.id = 'motivation-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '999999';
  overlay.style.fontFamily = 'Segoe UI, Arial, sans-serif';

  overlay.innerHTML = `
    <div style="background:#fff;padding:2rem 3rem;border-radius:1rem;box-shadow:0 4px 24px rgba(0,0,0,0.1);font-size:1.5rem;color:#333;text-align:center;max-width:500px;">
      <div>${quote.text}</div>
      <div style="margin-top:1rem;font-size:1.1rem;color:#666;">— ${quote.author}</div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function isShortsUrl(url) {
  return /https?:\/\/(www\.)?youtube\.com\/shorts\//.test(url);
}

function handleShortsOverlay() {
  if (isShortsUrl(window.location.href)) {
    showMotivationalOverlay();
  } else {
    const existing = document.getElementById('motivation-overlay');
    if (existing) existing.remove();
  }
}

// Initial check
handleShortsOverlay();

// Listen for SPA navigation (YouTube uses pushState)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    handleShortsOverlay();
  }
}).observe(document, {subtree: true, childList: true});
