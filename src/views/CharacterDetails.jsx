import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useItem } from "../services/APIServiceItem";

export const CharacterDetails = (props) => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [isLoading, character] = useItem("character", _id);

  if (isLoading) return;
  <h3 className="hero">Loading...</h3>;
  return (
    <main className="full-page-view">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            <h2>{character.name}</h2>
            <ul className="list-group bg-color">
              <li className="list-group-item bg-color">
                Height: {character.height}
              </li>
              <li className="list-group-item bg-color">
                Race: {character.race}{" "}
              </li>
              <li className="list-group-item bg-color">
                Gender: {character.gender}{" "}
              </li>
              <li className="list-group-item bg-color">
                Realm: {character.realm}
              </li>
              <li className="list-group-item bg-color">
                <a href={character.wikiUrl} target="_blank" rel="noreferrer">
                  {" "}
                  {character.wikiUrl}
                </a>
              </li>
            </ul>
            <div>
              <button onClick={() => navigate(-1)}>Back To Search</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
