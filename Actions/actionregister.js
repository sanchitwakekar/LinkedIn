import { ACTION_REGISTER, ACTION_REGISTER_SUCCESS, ACTION_REGISTER_FAILED, ACTION_GETPROFILE } from './types';

export function GET_ACTION_REGISTER(params) {
    return {
        type: ACTION_REGISTER,
        data: params,
    }
}
export function GET_ACTION_REGISTER_SUCCESS(params) {
    return {
        type: ACTION_REGISTER_SUCCESS,
        data: params,
    }
}
export function GET_ACTION_REGISTER_FAILED(params) {
    return {
        type: ACTION_REGISTER_FAILED,
        data: params,
    }
}
