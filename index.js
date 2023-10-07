const getQuotes = async () => {
    try {
        const res = await fetch("https://type.fit/api/quotes");
        const data = await res.json();

        // Assuming `data` is an array of quotes, you may want to choose a random quote.
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;

        const quotes = document.querySelector("#quotes");
        quotes.textContent = randomQuote;
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
};

window.addEventListener("load", () => {
    getQuotes();
});
