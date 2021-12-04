import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import {countReducer, nameReducer} from "./reducers";

const rootReducer = combineReducers({count: countReducer, name: nameReducer});
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const reduxStore = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);



/**
  react-redux - {
      Provider - component;
      hooks - {
          useDispatch,
          useSelector
      }
  }
 */