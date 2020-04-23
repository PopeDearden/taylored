import React from 'react';
import logo from './logo.svg';
import './App.scss'
import Nav from './components/Nav'
import Cover from './components/Cover'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './Reset.scss'
function App() {
  return (
    <div className="App">
     
        <Nav />
        <Cover id="Home"/>
        <About id="About"/>
        <Projects id="Projects"/>
        {/* <Contact id="Contacts"/> */}
        <Footer id="Footer"/>

    </div>
  );
}

export default App;
