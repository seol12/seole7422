import { all, fork} from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import post from './post';
import { BackendServerPort} from '../config/config';


axios.defaults.baseURL = `${BackendServerPort}/api`;


export default function* rootSaga() {

  yield all([
    fork(user),
    fork(post),
  ]);

}