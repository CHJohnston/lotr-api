import React from "react";
import { useState, useEffect } from "react";

export const HomeView = (props) => {
  const [quote, setQuote] = useState();
  const [character, setCharacter] = useState();
  const myToken = process.env.REACT_APP_lotrToken;

  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization: `${myToken}`,
    };
    const fetchData = async () => {
      const rawQuotes = await fetch("https://the-one-api.dev/v2/quote", {
        headers: headers,
      });
      const quotes = await rawQuotes.json();
      const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      setQuote(quote.dialog);
      const rawCharacters = await fetch(
        "https://the-one-api.dev/v2/character?_id=" + quote.character,
        { headers: headers }
      );
      const characters = await rawCharacters.json();
      const character = characters.docs[0];
      setCharacter(character.name);
    };

    fetchData();
  }, []);

  return (
    <main className="full-page-view">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="header-font hero">
              {quote} ~ {character} ~
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};
