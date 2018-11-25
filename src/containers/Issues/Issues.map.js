import { API_CALL_REQUEST } from '../../actions/types';

export const mapStateToProps = state => {
  return {
    loading: state.loading,
    issues: state.issues,
    error: state.error
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onRequestIssues: () => dispatch({ type: API_CALL_REQUEST })
  };
};