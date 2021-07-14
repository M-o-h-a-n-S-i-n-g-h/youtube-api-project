import { SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constants/auth.constants"

export const authReducer = (state = {}, action) => {
   switch (action.type) {
      case SIGNIN_REQUEST:
         return {loading: true}
      case SIGNIN_SUCCESS:
         return {
            loading: false,
            isLoggedIn: true,
            success: true,
            ...action.payload
         }
      case SIGNIN_FAIL:
         return {
            loading: false,
            isLoggedIn: false,
            success: false,
            ...action.error
         }
      default:
         return state
   }
}