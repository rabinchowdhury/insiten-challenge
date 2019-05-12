import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';

function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch(e) {
      console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) return undefined
      return JSON.parse(serializedState)
    } catch(e) {
      console.log(e)
      return undefined
    }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
    postReducer,
    persistedState
    );

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root'));