import { useState, useEffect } from "react";

export const useList = (apiList) => {
  const [listName, setlistName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const myToken = process.env.REACT_APP_lotrToken;

  useEffect(() => {
    console.log(`API Fetch List ${apiList}`);
    fetch(`https://the-one-api.dev/v2/${apiList}`, {
      headers: {
        Accept: "application/json",
        Authorization: myToken,        
      },
    })
      .then((res) => res.json())
      .then((resBody) => setlistName(resBody.docs))
      .catch((e) => console.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [isLoading, listName];
};
