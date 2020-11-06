import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

const App = () => {
  return (
    <div id="app">
      <div id="search">
        <h3>Look up cards here...</h3>
        <form>
          <input type="text" placeholder="card search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div id="results">
        <h3>Here's what we found:</h3>
      </div>
      <div id="deck">
        <h3>Your deck so far:</h3>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);