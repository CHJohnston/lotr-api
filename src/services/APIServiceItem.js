import { useState, useEffect } from "react";

export const useItem = (apiList, id) => {
  const [itemName, setItemName] = useState("{}");
  const [isLoading, setIsLoading] = useState(true);

  const myToken = process.env.REACT_APP_lotrToken;

  useEffect(() => {
    console.log(`API Fetch List ${apiList}`);
    if (id)
    fetch(`https://the-one-api.dev/v2/${apiList}/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: myToken,
      },
    })
      .then((res) => res.json())
      .then((resBody) => setItemName(resBody.docs[0]))
      .catch((e) => console.error(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [isLoading, itemName];
};