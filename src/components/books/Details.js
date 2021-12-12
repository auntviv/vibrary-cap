import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:8088/books?id=${id}`)
      .then((res) => res.json())
      .then(([book]) => {
        setDetails(book);
      });
  }, [id]);

  return (
    <section className="book">
      <img src={details?.imageUrl} height="auto" width="300" />
      <h3 className="book__name">{details?.name}</h3>
      <div className="book__author">Written by {details?.author}</div>
      <div className="book__description">{details?.description}</div>
      <div className="book__quote">{details?.quote}</div>
    </section>
  );
};
export default Details;
