import { useState } from "react";
import quotes from "../assets/quotes.json";
import "./RandomQuotes.css";
import twitterIcon from "../assets/twitter.png";
import colorIcon from "../assets/colour.png";

export default function RandomQuotes() {
  const [quote, setQuote] = useState(getRandomQuote);
  const [color, setColor] = useState(getRandomColor);

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  function getRandomColor() {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    return `rgb(${red},${green},${blue})`;
  }
  return (
    <>
      <div
        className="mainContainer"
        style={{
          background: `linear-gradient(to right bottom, ${color}, rgb(22, 1, 70))`,
        }}
      >
        <div className="frame">
          <div className="container" style={{ color: color }}>
            <div
              className="quoteBox"
              style={{ borderBottom: `2px solid ${color} ` }}
            >
              <p className="quote">
                <i>"{quote.quote}"</i>
              </p>
              <p className="author">
                <i>-{quote.author}</i>
              </p>
            </div>

            <div className="bottomBox">
              <div className="icons">
                <div
                  className="twitterIcon"
                  style={{
                    backgroundColor: color,
                  }}
                >
                  <a
                    href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quote.quote}`}
                  >
                    <img src={twitterIcon} alt="twitter-icon" />
                  </a>
                </div>
                <div className="colorIcon" style={{ backgroundColor: color }}>
                  <img
                    onClick={() => {
                      setColor(getRandomColor);
                    }}
                    src={colorIcon}
                    alt="color-icon"
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  setQuote(getRandomQuote);
                  setColor(getRandomColor);
                }}
                style={{ backgroundColor: color }}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
