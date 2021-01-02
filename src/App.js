import React from 'react'
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { GlobalStateProvider } from './context/GlobalState';





function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Form />
        <List />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
