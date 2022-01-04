import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const YoungAdultList = () => {
  const [youngAdults, setYoungAdults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/books?ageId=3")
      .then((res) => res.json())
      // when this comes back we need to convert jsonstring into actual JavaScript
      .then((agesArray) => {
        setYoungAdults(agesArray);
      });
  }, []);

  return (
    <>
      {youngAdults.map((youngAdultObject) => {
        return (
          <Link to={`/details/${youngAdultObject.id}`}>
            <h1 key={JSON.stringify(youngAdultObject)}>
            <h1>{youngAdultObject?.name}</h1>
              <img src={youngAdultObject?.imageUrl} height="400" width="300" />
            </h1>
          </Link>
        );
      })}
    </>
  );
};
