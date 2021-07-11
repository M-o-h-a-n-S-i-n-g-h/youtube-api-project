import { SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constants/auth.constants";
import { signIn } from "../../Helpers/Signin";

export const login = () => dispatch => {
   dispatch({type: SIGNIN_REQUEST});
   
   signIn()
   .then((res) => {
      dispatch({type: SIGNIN_SUCCESS, payload: res})
   })
   .catch(err => console.log(err));
}