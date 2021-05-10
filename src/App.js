import React, { useState, useEffect } from "react";
import "./App.scss";
import colorsArray from "./colorsArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const quotes = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [qoute, setQuote] = useState("I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.");
  const [author, setAuthor] = useState("andLeonardo da Vinci");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);
  const [accentColors, setAccentColors] = useState("#1AFF33");

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setQuotesArray(parsedJSON.quotes);
    console.log(parsedJSON);
  };

  useEffect(() => {
    fetchQuotes(quotes);
  }, [quotes]);

  const getRandomQuote = () => {
    let randomInt = Math.floor(quotesArray.length * Math.random());
    setRandomNumber(randomInt);
    setQuote(quotesArray[randomInt].quote);
    setAuthor(quotesArray[randomInt].author);
    setAccentColors(colorsArray[randomInt]);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: accentColors }}>
        <div id="quote-box" style={{ color: accentColors }}>
          <p id="text">
            <span>&ldquo;</span>
            {qoute}
          </p>
          <p id="author">- {author}</p>
          <div className="footer">
            <a
              className="btn"
              href={encodeURI(`https://twitter.com/intent/tweet/?text=${qoute} 
              -${author}`)}
              id="tweet-quote"
              style={{ backgroundColor: accentColors }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <button className="btn" id="new-quote" onClick={() => getRandomQuote()} style={{ backgroundColor: accentColors }}>
              New Quote
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
