import { API_CALL_SUCCESS, API_CALL_FAILURE } from './types';

export function apiSuccess(issues) {
  return {
    type: API_CALL_SUCCESS,
    issues
  }
};

export function apiFailure(error) {
  return {
    type: API_CALL_FAILURE,
    error
  }
}
