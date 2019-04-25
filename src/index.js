import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

const App = () => (
  <div>myAPP1</div>
);

ReactDOM.render(<App />, document.querySelector('#app'));

hot(module)(App);
