import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      
      <section className="App-content">
        <h1>App</h1>
        <Link to='/search/panda'>Gifs de pandas</Link>
        <Link to='/search/ecuador'>Gifs de ecuador</Link>
        <Link to='/search/Chile'>Gifs de Chile</Link>
        <Route 
          component={ListOfGifs}
          path='/search/:keyword' />
      </section>
    </div>
  );
}

export default App;
