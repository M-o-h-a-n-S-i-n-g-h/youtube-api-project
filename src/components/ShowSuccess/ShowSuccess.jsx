import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ShowSuccess = ({message}) => {
   return (
     <>
        {
           message ? (toast.success(message, {
                      position: "top-center",
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      toastId: "1234"
                   }) && <ToastContainer/>)
                   : <h2 className="App">
              Some Error Occurred
           </h2>
        }
     </>
   )
}
export default ShowSuccess;