import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useItem } from "../services/APIServiceItem";

export const CharacterDetails = (props) => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [isLoading, character] = useItem("character", _id);

  if (isLoading) return <h2>Loading ...</h2>;
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h2>{character.name}</h2>
            <ul className="list-group">
              <li className="list-group-item">Height: {character.height}</li>
              <li className="list-group-item">Race: {character.race} </li>
              <li className="list-group-item">Gender: {character.gender} </li>
              <li className="list-group-item">Realm: {character.realm}</li>
              <li className="list-group-item">
                <a href={character.wikiUrl} target="_blank" rel="noreferrer">
                  {" "}
                  {character.wikiUrl}
                </a>
              </li>
            </ul>
            <button onClick={() => navigate(-1)}>Back To Search</button>
          </div>
        </div>
      </div>
    </main>
  );
};
