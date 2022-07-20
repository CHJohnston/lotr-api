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

  if (isLoading) return <h2>Loading ...</h2>;
  return (
    <main>
      <h1>LOTR Character List {characterList.length}</h1>
      <label htmlFor="searchName">Search by Name: </label>
      <input
        type="text"
        id="searchName"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <div className="row p-4">
        {characterSearchList.map(({ _id, name, race }) => (
          <div key={_id} className="card col-sm-4">
            <div className="card-body">
              <h3>Name: {name}</h3>
              <h4>_id: {_id}</h4>
              <Link to={`${_id}`}> View More </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
