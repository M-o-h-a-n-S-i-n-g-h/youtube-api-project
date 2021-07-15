import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ShowError = ({error}) => {
   return (
     <>
        {error ? toast(error) && <ToastContainer/> : <h2 className="App">Some Error Occurred</h2>}
     </>
   )
}
export default ShowError;