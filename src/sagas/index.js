import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { API_CALL_REQUEST } from '../actions/types';
import { apiFailure, apiSuccess } from '../actions';

const url = "https://api.github.com/repos/facebook/react/issues?state=open";

// watcher saga - the main saga that will watch for API_CALL_REQUEST to start fetchSaga
export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, fetchSaga);
}


// fetchIssues function that fetches issues and return promise
export function fetchIssues() {
  return axios({
    method: 'get',
    url: url,
  })
}

// fetchSaga: makes API call when watcherSaga sees API_CALL_REQUEST action
export function* fetchSaga() {
  try {
    const response = yield call(fetchIssues);
    const issues = response.data;

    // dispatch a API_CALL_SUCCESS with issues
    yield put(apiSuccess(issues));
  }
  catch(error) {
    yield put(apiFailure(error.message));
  }
}