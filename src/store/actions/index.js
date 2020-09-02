import { store } from "../../../wrap-with-provider"
import * as actionTypes from "./actionTypes"

export const updateUserData = (userData) => {

    store.dispatch({ type: actionTypes.UPDATE_USER_DATA, userData });
}