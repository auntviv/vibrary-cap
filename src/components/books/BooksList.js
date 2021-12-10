import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import { BookForm } from "./BookForm"

export const BooksList = () => {
    const [books, setBooks] =useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/books")
                .then(res => res.json())
                .then((bookArray) => { 
                    setBooks(bookArray)
                    })
                
        },
        []
    )
    const history = useHistory()


    return (
        <>
        <div>
             <button onClick={() => history.push("/book/create")}>Share your favorite book!{BookForm}</button>
        </div>

        <h1>Recommend a Book to the Vibrary</h1>

        {
            books.map(
                (bookObject) => { 
                    return <h2>{bookObject.name}</h2>
                }
            )
        }
        </>
    )
}
