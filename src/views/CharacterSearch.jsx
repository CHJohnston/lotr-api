import { useState } from "react";
import { Link } from "react-router-dom";
import { useList } from "../services/APIServiceList";

export const CharacterSearch = (props) => {
  const [isLoading, characterList] = useList("character");
  const [searchName, setSearchName] = useState("");

  //Narrowing search based on name in the characterList
  let characterSearchList = characterList.filter(({ name }) =>
    name.toLowerCase().includes(searchName.toLowerCase())
  );

  if (isLoading) return <h3 className="full-page-view hero">Loading...</h3>;
  return (
    <main className="full-page-view container-fluid">
      <div className="sticky-top search-box">
        <h1>Character Search</h1>
        <label className="search-label" htmlFor="searchName">
          Search by Name:{" "}
        </label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      <div className="container-fluid">
        <div className="row p-4">
          {characterSearchList.map(({ _id, name }) => (
            <div key={_id} className="card col-lg-4 bg-color">
              <div className="card-body bg-color">
                <h3>Name: {name}</h3>
                
                <Link to={`${_id}`}> View More </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
