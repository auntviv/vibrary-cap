import React, { useEffect, useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { BookForm } from "./books/BookForm"
import { BooksList } from "./books/BooksList"
import { TeenList } from "./ages/TeenList"
import { YouthList } from "./ages/YouthList"
import { YoungAdultList } from "./ages/YoungAdultList"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import Details  from "./books/Details"

export const ApplicationViews = () => {

  const [authorizedUser, setAuthorizedUser] = useState(0);
  useEffect(() => {
    const vibraryUser = parseInt(localStorage.getItem("vibrary_user"))
    //just setting the current vibrary user to the authorized user
    if (vibraryUser) {
      setAuthorizedUser(vibraryUser);
      //just conditional rendering here
    }
  }, [])
  return (
    <>
      {!!authorizedUser && <NavBar setAuthorizedUser={setAuthorizedUser}/>}
      <Route
        path="/"
        render={() => {
          if (authorizedUser) {
            return <Redirect to="/books" />
          } else {
            return <Redirect to="/login" />
          }
          //if the authorized user is logged on you 
        }}
      />
      {/* routes specify the path to different components */}
      <Route path="/login">
        <Login setAuthorizedUser={setAuthorizedUser} />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/books">
        <BooksList authorizedUser= {authorizedUser} />
      </Route>
      {/* this is where we make sure the user who created the book can only edit or delete their own book */}
      <Route path={["/book/:action/:id", "/book/:action"]}>
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
      <Route path="/details/:id(\d+)">
        <Details />
      </Route>
    </>
  );
};
