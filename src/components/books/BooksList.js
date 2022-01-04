import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import library from "../Images/library.png";
import "./BookList.css";

export const BooksList = ({ authorizedUser }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/books")
      .then((res) => res.json())
      // when this comes back we need to convert jsonstring into actual JavaScript
      .then((bookArray) => {
        setBooks(bookArray);
        //maybe an async call since it's callback will be a promise?
        return;
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
       <h2>
          <img src={library} alt="library" width={400} height={100} background-color="black"/>
        <button onClick={() => history.push("/book/create")}>
          Add a Book!
        </button>
        </h2> 
      

      <ul className="bookListObj">
        {books.map((bookObject) => {
          return (
            <li key={JSON.stringify(bookObject)}>
              <Link to={`/details/${bookObject.id}`}>
                <img src={bookObject?.imageUrl} height="300" width="200" />
              </Link>
              {authorizedUser === bookObject.userId && (
                <>
                <div>
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
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
