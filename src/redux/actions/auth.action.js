import { SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constants/auth.constants";
import { signIn } from "../../Helpers/Signin";

export const login = () => dispatch => {
   dispatch({type: SIGNIN_REQUEST});
   
   return new Promise((resolve, reject) => {
      signIn()
      .then((res) => {
         dispatch({type: SIGNIN_SUCCESS, payload: res})
         resolve(res)
      })
      .catch(error => {
         dispatch({
            type: SIGNIN_FAIL,
            payload:
              error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
         });
         reject(error.message)
      })
   })
   
}