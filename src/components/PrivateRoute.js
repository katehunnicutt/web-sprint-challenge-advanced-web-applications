import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (window.localStorage.getItem("token", JSON.stringify())) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}> 
    </Route>
  );
}

// const PrivateRoute = () => {
//     const {push} = useHistory()
//     useEffect(() => {
//         axiosWithAuth()
//         .get('./colors')
//         .then(res => {
//             console.log(res)
//             push("/bubble-page")
//         })
//         .catch(err => { 
//             console.log({err})
//         push("/")
//     })
//     }, [])
//     return(
//         <div>
//             <h1>om om</h1>
//         </div>
//     )
// }

export default PrivateRoute;


//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
