import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Books.css";

export const BooksList = ({ authorizedUser }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/books")
      .then((res) => res.json())
       // when this comes back we need to convert jsonstring into actual JavaScript
      .then((bookArray) => {
        setBooks(bookArray);
        //maybe an async call since it's callback will be a promise?
      return () => {};
      });
  }, []);

  const deleteBook = (id) => {
    return fetch(`http://localhost:8088/books/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:8088/books")
        .then((res) => res.json())
        .then((bookArray) => {
          const filteredBooks = bookArray.filter((book) => book.ageId);
          setBooks(filteredBooks);
        });
    });
  };

  const history = useHistory();

  return (
    <>
      <h1>Welcome to the Vibrary!</h1>
      <div>
        <button onClick={() => history.push("/book/create")}>
          Share your favorite book!
        </button>
      </div>

      <ul>
        {books.map((bookObject) => {
          return (
            <li key={JSON.stringify(bookObject)}>
              <Link to={`/details/${bookObject.id}`}>
                <img src={bookObject?.imageUrl} height="300" width="200" />
                <h2>{bookObject.name}</h2>
              </Link>
              {authorizedUser === bookObject.userId && (
                <>
                  <button
                    className="btn-primary"
                    onClick={() => deleteBook(bookObject.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn-primary"
                    onClick={() => history.push(`/book/edit/${bookObject.id}`)}
                  >
                    Edit
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
