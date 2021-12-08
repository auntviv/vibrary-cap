import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const BookForm = () => {
    const [books, addBooks] = useState([])

    const history = useHistory()

    const saveBook = (event) => {
        event.preventDefault()
    }
    //

    return (
        
        <form className="bookForm">
            <h2 className="bookForm__title">Recommend a Book</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (evt) => {
                                const copy = {...books}
                                copy.description = evt.target.value
                                addBooks(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                addBooks(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveBook}>
                Submit Ticket
            </button>
        </form>
    )
}
