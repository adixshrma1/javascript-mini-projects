let quotes = document.getElementById('quotes');
let writer = document.getElementById('writer');
let url = 'https://api.quotable.io/random';

async function getQuote(){
    const response = await fetch(url);
    const data = await response.json();

    quotes.innerHTML = data.content;
    writer.innerHTML = data.author;
}
getQuote();

function tweetIt(){
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + "---by " + writer.innerHTML, "window", "height=400, width=700")
}
