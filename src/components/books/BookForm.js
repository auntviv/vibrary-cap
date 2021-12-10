import React from "react";
import { useState } from "react";

export const BookForm = () => {
    const [book, setBooks] = useState("");
    


    const saveBook = (event) => {
        event.preventDefault()
    }
  return (
    <form>
      <label>Name of Book:
        <input type="text" 
        required
        autoFocus
          value={book}
          onChange={(e) => setBooks(e.target.value)}
        />
      </label>

            <button className="btn btn-primary" onClick={saveBook}>
                Submit Book
            </button>
    </form>
  )
}
