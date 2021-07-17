import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ShowError = ({error}) => {
   return (
     <>
        {error ? toast.error(error, {
           toastId: "123",
           position: "top-center"
        }) && <ToastContainer autoClose={4000}/> : <h2 className="App">Some
           Error
           Occurred</h2>}
     </>
   )
}
export default ShowError;