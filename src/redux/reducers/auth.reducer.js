import { SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constants/auth.constants"

export const authReducer = (state = {user: {}}, action) => {
   switch (action.type) {
      case SIGNIN_REQUEST:
         return {loading: true}
      case SIGNIN_SUCCESS:
         return {loading: false, user: action.payload}
      default:
         return state
   }
}