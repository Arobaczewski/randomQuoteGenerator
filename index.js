const quotes = [
"Every sunrise is a blank page. Write something bold.",
"You don’t need perfect conditions—just a decision to start.",
"Discomfort is just growth in disguise. Lean in.",
"The dream only works if you do.",
"Success whispers to those who keep showing up.",
"You weren’t born to blend in. Light it up.",
"Fear is a signpost, not a stop sign.",
"Your future self is already proud. Keep going.",
"Progress is louder than perfection.",
"Even the smallest spark can start a wildfire of change."
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIndex)) continue


        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIndex);
        break
    }

};