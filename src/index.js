import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {reducers} from './redux/index';
import registerServiceWorker from './registerServiceWorker';

import './main.css';

const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <div>
            Hello World
        </div>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
