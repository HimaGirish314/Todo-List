import './App.css';
import React from 'react';
import Todo from './components/Todo';
function App() {
  return (
    <div className="App">
      <div className='navbar'></div>
      <h1>TODO-LIST</h1>
      <Todo />
      <div className='navbar2'></div>
    </div>
  );
}

export default App;
