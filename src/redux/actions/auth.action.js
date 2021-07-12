import { SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constants/auth.constants";
import { signIn } from "../../Helpers/Signin";

export const login = () => dispatch => {
   dispatch({type: SIGNIN_REQUEST});
   
   return new Promise((resolve) => {
      signIn()
      .then((res) => {
         dispatch({type: SIGNIN_SUCCESS, payload: res})
         resolve(res)
      })
      .catch(err => console.error(err))
   })
   
}