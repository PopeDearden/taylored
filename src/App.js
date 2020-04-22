import React from 'react';
import logo from './logo.svg';
import './App.scss'
import Nav from './components/Nav'
import Cover from './components/Cover'
import About from './components/About'
import Projects from './components/Projects'
import './Reset.scss'

function App() {
  return (
    <div className="App">
     
        <Nav />
        <Cover id="Home"/>
        <About id="About"/>
        <Projects id="Projects"/>

    </div>
  );
}

export default App;
