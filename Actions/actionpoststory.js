import { ACTION_POST_REQUEST_STORY, ACTION_POST_REQUEST_STORY_SUCCESS, ACTION_POST_REQUEST_STORY_FAILED } from './types';

export function GET_ACTION_POST_REQUEST_STORY() {
    return {
        type: ACTION_POST_REQUEST_STORY,        
    }
}
export function GET_ACTION_POST_REQUEST_STORY_SUCCESS(params) {
    return {
        type: ACTION_POST_REQUEST_STORY_SUCCESS,
        data: params,
    }
}
export function GET_ACTION_POST_REQUEST_STORY_FAILED(params) {
    return {
        type: ACTION_POST_REQUEST_STORY_FAILED,
        data: params,
    }
} 