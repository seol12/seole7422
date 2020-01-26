import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { 
  LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS,
  LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS,
  LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS,
  LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, 
  REMOVE_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS,
  SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS,
} from '../reducers/user';

function logInAPI(loginData) {
  return axios.post('/user/login', loginData, {
    withCredentials: true,
  });
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({ 
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      reason: e.response && e.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}

function signUpAPI(signUpData) {
  return axios.post('/user/', signUpData);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({ 
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function logOutAPI() {
  return axios.post('/user/logout', {}, {
    withCredentials: true,
  });
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({ 
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    });
  }
}

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function loadUserAPI(userId) {
  return axios.get(userId ? `/user/${userId}` : '/user/', {
    withCredentials: true, 
  }); 
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({ 
      type: LOAD_USER_SUCCESS,
      data: result.data,
      me: !action.data,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    });
  }
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function loadFollowersAPI(userId, offset = 0, limit = 3) {
  return axios.get(`/user/${userId || 0}/followers?offset=${offset}&limit=${limit}`, {
    withCredentials: true,
  });
}

function* loadFollowers(action) {
  try {
    const result = yield call(loadFollowersAPI, action.data, action.offset);
    yield put({ 
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: LOAD_FOLLOWERS_FAILURE,
      error: e,
    });
  }
}

function* watchLoadFollowers() {
  yield takeEvery(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function loadFollowingsAPI(userId, offset = 0, limit = 3) {
  return axios.get(`/user/${userId || 0}/followings?offset=${offset}&limit=${limit}`, {
    withCredentials: true,
  });
}

function* loadFollowings(action) {
  try {
    const result = yield call(loadFollowingsAPI, action.data, action.offset);
    yield put({ 
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: LOAD_FOLLOWINGS_FAILURE,
      error: e,
    });
  }
}

function* watchLoadFollowings() {
  yield takeEvery(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function removeFollowerAPI(userId) {
  return axios.delete(`/user/${userId}/follower`, {
    withCredentials: true,
  });
}

function* removeFollower(action) {
  try {
    const result = yield call(removeFollowerAPI, action.data);
    yield put({ 
      type: REMOVE_FOLLOWER_SUCCESS,
      data: result.data,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: REMOVE_FOLLOWER_FAILURE,
      error: e,
    });
  }
}

function* watchRemoveFollower() {
  yield takeEvery(REMOVE_FOLLOWER_REQUEST, removeFollower);
}


export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchSignUp),
    fork(watchLoadFollowers),
    fork(watchLoadFollowings),
    fork(watchRemoveFollower),
  ]);
}