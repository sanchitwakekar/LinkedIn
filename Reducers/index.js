import { AuthReducer } from './AuthReducer';
import { combineReducers } from 'redux';
import { StoryReducer } from './StoryReducer';

export const rootreducer = combineReducers({ Authentication: AuthReducer ,Story: StoryReducer});