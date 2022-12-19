import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path
  
  // use loggedIn to return a Redirect

  if (!loggedIn) {
    return <Navigate replace to='../sign-up' />
  }

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={"edit"}>Edit</Link>
      <Routes>
        <Route path='edit' element={<EditProfileForm />} />
      </Routes>

      {/* <Outlet /> Needed when using nested routes to update a peice of a page */}
    </main>
  )
}
