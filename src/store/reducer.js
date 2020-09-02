import update from 'immutability-helper';
import * as actionTypes from "./actions/actionTypes"

const initialState = {
    userData: {
        username: '',
        age: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_DATA: {

            const newState = update(initialState, {
                userData: {$set: {...action.userData}}
            });


            return newState;
        }

        default:
            return state;
    }
}

export default reducer