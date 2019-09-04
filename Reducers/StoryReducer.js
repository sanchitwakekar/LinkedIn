import { ACTION_POST_REQUEST_STORY,ACTION_POST_REQUEST_STORY_SUCCESS,ACTION_POST_REQUEST_STORY_FAILED } from '../Actions/types';

const initialState = {
    StoryList: {},
};

export function StoryReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_POST_REQUEST_STORY: {
            return {
                ...state,

            }
        }
        case ACTION_POST_REQUEST_STORY_SUCCESS: {
            return {
                ...state,
                StoryList: action.data,
            }
        }
        case ACTION_POST_REQUEST_STORY_FAILED: {
            return {
                ...state,
            }
        }     
      
        default:
            return state;
    }
}