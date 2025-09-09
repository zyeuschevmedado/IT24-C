const nameInput = document.getElementById("nameInput");
const nameOutput = document.getElementById("nameOutput");

nameInput.addEventListener("input", function() {
  nameOutput.textContent = "Hello, " + nameInput.value + "!";
});


const quotes = [
  "Small progress each day adds up to big results.",
  "Don’t stop when you’re tired, stop when you’re done.",
  "Believe you can, and you’re halfway there.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Your only limit is your mind."
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");

quoteBtn.addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteOutput.textContent = quotes[randomIndex];
});