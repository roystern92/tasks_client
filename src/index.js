import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//For the routes 
import { BrowserRouter } from 'react-router-dom';

//Redux Configuration
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';

//Reducers
import authReducer from './store/reducers/auth';
import listsReducer from './store/reducers/lists';
import taskReducer from './store/reducers/task';

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// import {compose } from 'redux';


const rootReducer = combineReducers({
    lists: listsReducer,
    auth: authReducer,
    task: taskReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));


serviceWorker.register();
