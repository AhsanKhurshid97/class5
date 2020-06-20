import React, {useState} from 'react';
import './App.css';
import Parent from './Parent.js';
import counterContext from './CounterContext'

function App() {
  let countState = useState(1);
  return (
    <counterContext.Provider value ={countState}>
    <div>
      <Parent/>
    </div>
    </counterContext.Provider> 
  );
}

export default App;
