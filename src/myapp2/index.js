import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Button from '~~components/Button';

const App = () => (
  <div>
    myAPP2
    <Button />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));

hot(module)(App);
