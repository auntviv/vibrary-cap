import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { BookForm } from "./books/BookForm";
import { BooksList } from "./books/BooksList";
import { TeenList } from "./ages/TeenList";
import { YouthList } from "./ages/YouthList";
import { YoungAdultList } from "./ages/YoungAdultList";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const ApplicationViews = () => {
  const [authorizedUser, setAuthorizedUser] = useState(false);

  useEffect(() => {
    const vibraryUser = localStorage.getItem("vibrary_user")
    if (vibraryUser) {
        setAuthorizedUser(true)
    }
  }, []
  )
  return (
    <>
      {authorizedUser && <NavBar />}
      <Route
        path="/"
        render={() => {
          if (authorizedUser) {
            return  <Redirect to="/books" />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route path="/login">
        <Login setAuthorizedUser={setAuthorizedUser} />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/books">
        <BooksList />
      </Route>
      <Route path="/book/create">
        <BookForm />
      </Route>
      <Route path="/youth">
        <YouthList />
      </Route>
      <Route path="/teen">
        <TeenList />
      </Route>
      <Route path="/youngadult">
        <YoungAdultList />
      </Route>
    </>
  );
};
