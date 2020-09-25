import React, { useEffect } from 'react';
import './App.css';
import MainList from "./modules/MainList";
import InactiveList from './modules/InactiveList';
import { useDispatch } from 'react-redux'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('hello hooks');
    dispatch({type: 'GET_ACTIVE'})
    dispatch({type: 'GET_INACTIVE'})
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          *Welcome to Bagel Acquisition Module Alpha*
        </h1>
        <MainList/>
        <p>Previously Bought:</p>
        <InactiveList/>
      </header>
    </div>
  );
}

export default App;
