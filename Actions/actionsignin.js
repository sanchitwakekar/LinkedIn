import { ACTION_SIGNIN } from './types';
import { ACTION_SIGNIN_SUCCESS } from './types';
import { ACTION_SIGNIN_FAILED } from './types';

export function GET_ACTION_SIGNIN(params) {
    return {
        type: ACTION_SIGNIN,
        data: params,
    }
}
export function GET_ACTION_SIGNIN_SUCCESS(params) {
    console.log(params);
    return {
        type: ACTION_SIGNIN_SUCCESS,
        data: params,
    }
}
export function GET_ACTION_SIGNIN_FAILED(params) {
    return {
        type: ACTION_SIGNIN_FAILED,
        data: params,
    }
} 