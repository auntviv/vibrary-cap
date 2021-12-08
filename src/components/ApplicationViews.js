import React from "react"
import { Route } from "react-router-dom"
import { BooksList } from "./books/BooksList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="">
                <BooksList />
            </Route>
        </>
    )
}
