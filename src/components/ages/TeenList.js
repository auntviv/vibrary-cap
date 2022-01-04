import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TeenList = () => {
  const [teens, setTeens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/books?ageId=2")
      .then((res) => res.json())
        // when this comes back we need to convert jsonstring into actual JavaScript
      .then((agesArray) => {
        setTeens(agesArray);
      });
  }, []);

  return (
    <>
      {teens.map((teenObject) => {
        return (
          <Link to={`/details/${teenObject.id}`}>
            <h1 key={JSON.stringify(teenObject)}>
              <h1>{teenObject?.name}</h1>
            <img src={teenObject?.imageUrl} height="400" width="300" /></h1>{" "}
          </Link> 
        );
      })}
    </>
  );
};
