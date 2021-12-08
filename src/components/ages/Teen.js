import React, { useEffect, useState} from "react"

export const AgeList = () => {
    const [books, setBooks] =useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/s")
                .then(res => res.json())
                .then((bookArray) => { 
                    setBooks(bookArray)
                    })
                
        },
        []
    )

    return (
        <>
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
