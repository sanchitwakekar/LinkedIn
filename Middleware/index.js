import { call, takeEvery, put } from 'redux-saga/effects';
import { ACTION_REGISTER, ACTION_SIGNIN, ACTION_POST_REQUEST_STORY } from '../Actions/types';
import { GET_ACTION_REGISTER_SUCCESS, GET_ACTION_REGISTER_FAILED } from '../Actions/actionregister';
import { GET_ACTION_SIGNIN_SUCCESS, GET_ACTION_SIGNIN_FAILED } from '../Actions/actionsignin';
import { GET_ACTION_POST_REQUEST_STORY_SUCCESS, GET_ACTION_POST_REQUEST_STORY_FAILED } from '../Actions/actionpoststory';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

Registeruser = async (credentials) => {
    console.log(credentials);
    return await AsyncStorage.setItem('@' + credentials.username, JSON.stringify(credentials));
};

SignInuser = async (credentials) => {
    let user = JSON.parse(await AsyncStorage.getItem('@' + credentials.username));
    console.log(user);

    if (user.username === credentials.username && user.password === credentials.password) {
        return user;
    }
    else {
        return false;
    }
};

updateSearch = async () => {
    return axios.get("https://api.myjson.com/bins/14t4m3");
};
function* GetRegisterSaga(action) {
    console.log(action);
    try {
        let user = yield call(Registeruser, action.data);
        console.log(user);
        yield put(GET_ACTION_REGISTER_SUCCESS(action.data));
    } catch (e) {
        yield put(GET_ACTION_REGISTER_FAILED(e));
    }
}

function* GetSignInSaga(action) {
    try {
        let isvaliduser = yield call(SignInuser, action.data);
        console.log(isvaliduser);
        console.log(typeof isvaliduser);
        if (isvaliduser) { yield put(GET_ACTION_SIGNIN_SUCCESS(isvaliduser)); }
        else yield put(GET_ACTION_SIGNIN_FAILED('Error'));
    } catch (e) {
        yield put(GET_ACTION_SIGNIN_FAILED(e));
    }
}
function* GetStorySaga(action) {
    try {
        let stories = yield call(updateSearch, action.data);
        console.log(stories);
        yield put(GET_ACTION_POST_REQUEST_STORY_SUCCESS(stories.data));
    } catch (e) {
        yield put(GET_ACTION_POST_REQUEST_STORY_FAILED(e));
    }
}


export function* RootSaga() {
    yield takeEvery(ACTION_REGISTER, GetRegisterSaga);
    yield takeEvery(ACTION_SIGNIN, GetSignInSaga);
    yield takeEvery(ACTION_POST_REQUEST_STORY, GetStorySaga);
} 