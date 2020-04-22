import React from 'react';
import logo from './logo.svg';
import './App.scss'
import Nav from './components/Nav'
import Cover from './components/Cover'
import About from './components/About'
import './Reset.scss'

function App() {
  return (
    <div className="App">
      <Cover/>
      <Nav/>
      <About/>
    </div>
  );
}

export default App;
