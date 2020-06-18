import React,{useState} from 'react';
import CounterContext from './CounterContext';
import Parent from './Parent';
import './App.css';

function App() {

  const counter = useState(1);

  return (
    <CounterContext.Provider value={counter}>
      <Parent />
    </CounterContext.Provider>
  );
}

export default App;
