import sagaHelper from 'redux-saga-testing';
import { call, put, takeLatest } from 'redux-saga/effects';

import { watcherSaga, fetchSaga, fetchIssues } from './index';
import { apiSuccess, apiFailure } from '../actions';

describe('fetchSaga success', () => {
  const it = sagaHelper(fetchSaga());
  it('should call fetchIssues function', result => {
    expect(result).toEqual(call(fetchIssues));
    return [
      { id: 1, title: 'foo' },
      { id: 2, title: 'bar' },
      { id: 3, title: 'foobar' }
  ];
  });

  it('should trigger apiSuccess after successful API call', result => {
    expect(result).toEqual(put(apiSuccess()));
  });
});

describe('fetchSaga failure', () => {
  const it = sagaHelper(fetchSaga());
  it('should call fetchIssues function', result => {
    expect(result).toEqual(call(fetchIssues));
    return new Error('Something went wrong');
  });

  it('should trigger apiFailure after a failed API call', result => {
    expect(result).toEqual(put(apiFailure('Something went wrong')));
  }) 
});