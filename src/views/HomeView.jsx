import React, { useState, useEffect } from "react";
import { useList } from "../services/APIServiceList";

export const HomeView = (props) => {
  //Get Random Quote from the Quote List
  const [isLoading, quoteList] = useList("quote");
  const [character, setCharacter] = useState("{}");
  const [isCharacterLoading, setIsCharacterLoading] = useState(true);
  const quote = quoteList[Math.floor(Math.random() * quoteList.length)];

  //This will load the character name for the quote
  useEffect(() => {    
    if (quote) {
      fetch(`https://the-one-api.dev/v2/character/${quote.character}`, {
        headers: {
          Accept: "application/json",
          Authorization: process.env.REACT_APP_lotrToken,
        },
      })
        .then((res) => res.json())
        .then((resBody) => setCharacter(resBody.docs[0]))
        .catch((e) => console.error(e))
        .finally(() => {
          setIsCharacterLoading(false);
        });
    }
  }, [isLoading, quoteList]);

  if (isLoading || isCharacterLoading) return;
  <h3 className="full-page-view hero">Loading...</h3>;
  return (
    <main className="full-page-view">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 header-font hero">
            <h1>{quote.dialog}</h1>
            <h2>{character.name}</h2>
          </div>
        </div>
      </div>
    </main>
  );
};
