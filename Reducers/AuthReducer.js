import { ACTION_SIGNIN, ACTION_SIGNIN_FAILED, ACTION_SIGNIN_SUCCESS, ACTION_REGISTER, ACTION_REGISTER_FAILED, ACTION_REGISTER_SUCCESS, ACTION_LOGOUT } from '../Actions/types';

const initialState = {
    isLoggedIn: '0',
    registrationsuccessful: '0',
};

export function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_REGISTER: {
            return {
                ...state,
                registrationsuccessful: '0',
            }
        }
        case ACTION_REGISTER_SUCCESS: {
            return {
                ...state,
                registrationsuccessful: '1',
            }
        }
        case ACTION_REGISTER_FAILED: {
            return {
                ...state,
                registrationsuccessful: '0',
            }
        }
        case ACTION_SIGNIN: {
            return {
                ...state,

            }
        }
        case ACTION_SIGNIN_SUCCESS: {
            return {
                ...state,
                ...action.data,
                isLoggedIn: '1',

            }
        }
        case ACTION_SIGNIN_FAILED: {
            return {
                isLoggedIn: '0',
            }
        }
        case ACTION_LOGOUT: {
            return {
                isLoggedIn: '0',
                registrationsuccessful: '0',
            }
        }


        default:
            return state;
    }
}