import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const BookForm = () => {
  const [book, setNewBook] = useState({
    userId: 0,
    bookId: 0,
    name: "",
    author: "",
    description: "",
    quote: "",
    imageUrl: "",
    recommendation: false,
    ageId: 0,
  });

  const updateBookState = (value, key) => {
    const update = Object.assign({}, book, {
      [key]: value,
    });
    setNewBook(update);
  };
  //  Object.assign reduces all objects into one from right to left
  const history = useHistory();

  const saveBook = (event) => {
    event.preventDefault();

    const body = Object.assign({}, book, {
      userId: parseInt(localStorage.getItem("vibrary_user"))
    });

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return fetch("http://localhost:8088/books", fetchOption).then(() => {
      history.push("/books");
    });
  };

  return (
    <form className="bookForm">
      <h2> Add a Book to the Vibrary</h2>
      <div className="form-group">
        <label>
          Name:
          <input
            type="text"
            required
            autoFocus
            value={book.name}
            onChange={(e) => {
              updateBookState(e.target.value, "name");
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Author:
          <input
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
          <input
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
            type="text"
            required
            autoFocus
            value={book.bookCover}
            onChange={(e) => {
              updateBookState(e.target.value, "bookCover");
            }}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Quote:
          <input
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
      <div>
        <label>
          {" "}
          Recommend this book?
          <input
            type="checkbox"
            value={book.recommendation}
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
