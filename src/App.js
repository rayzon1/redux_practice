import React from 'react';
import './App.css';
import Counter from './containers/Counter';
import Reviews from './containers/Reviews';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Counter />
      <Reviews />
    </div>
  );
}

export default App;
