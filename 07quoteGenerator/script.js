let quotes = document.getElementById("quotes");
let writer = document.getElementById("writer");

const apiKey = "ldRInyV03+ccAp+MJPJmCQ==uZK1hVuiGAsKaa8D";
const url = "https://api.api-ninjas.com/v1/quotes";

async function getQuote() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data)

  quotes.innerHTML = data[0].quote;
  writer.innerHTML = data[0].author;
}
getQuote();

function tweetIt() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quotes.innerHTML +
      "---by " +
      writer.innerHTML,
    "window",
    "height=400, width=700"
  );
}
