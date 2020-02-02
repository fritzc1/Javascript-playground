import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import myApp from './reducers/reduc'; // name anonymous function in "Reduc.js" upon import
import Results from './Results';
let store = createStore(myApp); // init the store 
let mypropvar = 'testing123';

function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store} mypropvar={mypropvar}/>
      <hr />
      <Results store={store}/>
    </div>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
