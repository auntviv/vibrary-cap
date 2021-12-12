import React, { useEffect, useState } from "react";

export const TeenList = () => {
  const [teens, setTeens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/books?ageId=2")
      .then((res) => res.json())
      .then((agesArray) => {
        setTeens(agesArray);
      });
  }, []);

  return (
    <>
      {teens.map((teenObject) => {
        return <h2 key={JSON.stringify(teenObject)}>{teenObject.name}</h2>;
      })}
    </>
  );
};
