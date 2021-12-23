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
            <h2 key={JSON.stringify(youngAdultObject)}>
              {youngAdultObject.name}
            </h2>
            {" "}
          </Link>
        );
      })}
    </>
  );
};
