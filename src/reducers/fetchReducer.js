import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actions/types';


// initiating initial state
export const initialState = {
  issues: [],
  loading: false,
  error: ''
}

export default function fetchReducer(state = initialState, action) {
  switch(action.type) {
    case API_CALL_REQUEST: 
      return {...state, loading: true, error: ''};
    case API_CALL_SUCCESS:
      return {...state, loading: false, issues: action.issues};
    case API_CALL_FAILURE:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
}
