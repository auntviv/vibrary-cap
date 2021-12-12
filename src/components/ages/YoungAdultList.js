import React, { useEffect, useState } from "react";

export const YoungAdultList = () => {
  const [youngAdults, setYoungAdults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/books?ageId=3")
      .then((res) => res.json())
      .then((agesArray) => {
        setYoungAdults(agesArray);
      });
  }, []);

  return (
    <>
      {youngAdults.map((youngAdultObject) => {
        return <h2 key={JSON.stringify(youngAdultObject)}>{youngAdultObject.name}</h2>;
      })}
    </>
  );
};
