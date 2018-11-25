import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/main.scss';
import * as serviceWorker from './serviceWorker';
import fetchReducer from "./reducers/fetchReducer";
import { watcherSaga } from "./sagas";

import Issues from './containers/Issues';

/** 
 * create the saga middleware
*/
const sagaMiddleware = createSagaMiddleware();

/** 
 * dev tools middleware -> integrates reduxDevTools for Chrome, used for development purposes
 * const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
 */

/**  
 * create a redux store with our reducer above and middleware
*/
let store = createStore(
  fetchReducer,
  compose(applyMiddleware(sagaMiddleware))
);

/** 
 * run the watcherSaga
*/
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Issues}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

