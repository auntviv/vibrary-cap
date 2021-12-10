import React from "react";
import { useState } from "react";
import BookRepository from "../BookRepository";

export const BookForm = () => {
    const [name, setName] = useState("")
    const [author, setAuthor]= useState("")
    const [description, setDescriptiom]= useState("")
    const [bookCover, setBookCover]= useState("")
    const [quote, setQuote]= useState("")
    const [recommendation, setRecommendation]= useState("")
    const [ageId, setAgeId]= useState([])
    const [userId, setUserId]= useState(0)
    


    const saveBook = (event) => {
        event.preventDefault()
    }
  return (
    <form className= "bookForm">
      <h2> Add a Book to the Vibrary</h2>
      <div className= "form-group">
      <label>Name:
        <input type="text" 
        required
        autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      </div>
      <div className= "form-group">
      <label>Author:
        <input type="text" 
        required
        autoFocus
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      </div>
      <div className= "form-group">
      <label>Description:
        <input type="text" 
        required
        autoFocus
          value={description}
          onChange={(e) => setDescriptiom(e.target.value)}
        />
      </label>
      </div>
      <div className= "form-group">
      <label>Book Cover:
        <input type="text" 
        required
        autoFocus
          value={bookCover}
          onChange={(e) => setBookCover(e.target.value)}
        />
      </label>
      </div>
      <div className= "form-group">
      <label>Quote:
        <input type="text" 
        required
        autoFocus
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label> Recommend this book?
        <input type="checkbox">
          value={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
        </input>
      </label>
      </div>
            <button className="btn btn-primary" onClick={saveBook}>
                Submit Book
            </button>
    </form>
  )
}
