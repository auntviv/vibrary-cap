import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./BookForm.css";


export const BookForm = () => {
  const [ages, setAges] = useState([]);
   //useState returns a pair of values, current state and update(getter and setter)
  const [book, setNewBook] = useState({
    userId: null,
    name: "",
    author: "",
    description: "",
    quote: "",
    imageUrl: "",
    recommendation: false,
    ageId: 0,
  });
  //useState returns a pair of values, current state and update

  //updateBookState function creates a new book
  const updateBookState = (value, key) => {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    // We use Object.assign method to easily add new properties to an existing object
    const update = Object.assign({}, book, {
      [key]: value,
      //invokes both getters and setters
    });
    setNewBook(update);
    //effectively merging two properties together, similar to [] dot notation
  };

  //  Object.assign reduces all objects into one target source from right to left, assigns, doesnt copy or create a new one

  const history = useHistory();
  //history is a variable set equal to the useHistory react router hook that we're running

  useEffect(() => {
    fetch("http://localhost:8088/ages")
      .then((res) => res.json())
      // when this comes back we need to convert jsonstring into actual JavaScript
      .then((data) => {
        setAges(data);
      }); // modify state by invoking setAges bc you cannot directly modify state
    // sole purpose of this UseEffect fucntion is to run code when certain state changes,
    // when any state changes its going to invoke this function, similar to event listener
  }, []);
  //dependency arrays are the second optional argument in the useEffect hook
  const params = useParams();

  useEffect(() => {
    if (params.action === "edit") {
      fetch(`http://localhost:8088/books?id=${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setNewBook(data[0]);
        });
    }
  }, []);
  //empty dependency array only re-renders once

  const saveBook = (event) => {
    event.preventDefault();

    const body = Object.assign({}, book, {
      userId: parseInt(localStorage.getItem("vibrary_user")),
    });

    const fetchOption = {
      method: params.action === "edit" ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return fetch(
      `http://localhost:8088/books${
        params.action === "edit" ? `/${params.id}` : ""
      }`,
      fetchOption
    ).then(() => {
      history.push("/books");
    });
  };
  //history is how you navigate to different links, know where you are in the URL
  //we are navigating to the books page here

  return (
    <form className="bookForm">
      <h2> Add a Book to the Vibrary</h2>
      <div className="form-group">
        <label>
          Name:
          <input
            className="form-control .form-control-sm"
            type="text"
            required
            autoFocus
            value={book.name}
            onChange={(e) => {
              updateBookState(e.target.value, "name");
              //event.target is referencing the object on which the event initially occurred
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Author:
          <input
            className="form-control .form-control-sm"
            type="text"
            required
            autoFocus
            value={book.author}
            onChange={(e) => {
              updateBookState(e.target.value, "author");
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Description:
          <textarea
            className="form-control .form-control-lg"
            type="text"
            required
            autoFocus
            value={book.description}
            onChange={(e) => {
              updateBookState(e.target.value, "description");
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Book Cover:
          <input
            className="form-control .form-control-sm"
            type="text"
            required
            autoFocus
            value={book.imageUrl}
            onChange={(e) => {
              updateBookState(e.target.value, "imageUrl");
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Quote:
          <input
            className="form-control .form-control-sm"
            type="text"
            required
            autoFocus
            value={book.quote}
            onChange={(e) => {
              updateBookState(e.target.value, "quote");
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <select
          value={parseInt(book?.ageId) || "" }
          //defaulting/shortcircuting
          id="ageId"
          name="age"
          className="form-control form-control-sm"
          onChange={(e) => updateBookState(parseInt(e.target.value), "ageId")}
        >
          <option value="">Select a Lifetime</option>
          {ages.map((e) => (
            <option key={e.id} id={e.id} value={e.id}>
              {/* the value of e.id here is associated with the select value */}
              {e.ageRange}
            </option>
            //just creating a new array populated with the results of of the function called
          ))}
        </select>
      </div>
      <div>
        <label>
          {/* https://www.w3schools.com/tags/att_input_checked.asp */}
          Recommend this book?
          <input
            className="form-check"
            type="checkbox"
            checked={book.recommendation}
            onChange={(e) => {
              updateBookState(e.target.checked, "recommendation");
            }}
          />
        </label>
      </div>
      <button className="btn btn-primary" onClick={saveBook}>
        Submit Book
      </button>
    </form>
  );
};
