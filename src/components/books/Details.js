import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//the useParams hook to declare a route for my component to use

const Details = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();
  // you can name the parameter anything you want but its it should match the jey

  useEffect(() => {
    fetch(`http://localhost:8088/books?id=${id}`)
      // when this comes back we need to convert jsonstring into actual JavaScript
      .then((res) => res.json())
      .then(([book]) => {
        setDetails(book);
        // modify state by invoking setDetailss bc you cannot directly modify state
        // sole purpose of this UseEffect fucntion is to run code when certain state changes,
        // when any state changes its going to invoke this function, similar to event listener
      });
  }, [id]);
  //if any of the variable in the dependencies array changes the useEffect hook will run.

  return (
    //obviously just returning the JSX
    <section className="book" key={id}>
      <img src={details?.imageUrl} height="auto" width="300" />
      <h3 className="book__name">{details?.name}</h3>
      <div className="book__author">Written by {details?.author}</div>
      <div className="book__description">{details?.description}</div>
      <div className="book__quote">{details?.quote}</div>
    </section>
  );
};
export default Details;
