import React from 'react';
import logo from '../logo.svg';
import './App.css';
import News from './News/News';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-Title"> My App </h1>
      </header>
      <News/>
    </div>
  );
}

//export default App;
