import React from 'react';

import { navLinks, portfolioData, experienceData, aboutData } from './util';

import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';

import PortfolioModal from './components/modal/PortfolioModal'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar navLinks={navLinks}/>
      <Header/>
      <Portfolio portfolioData={portfolioData}/>
      <About data={aboutData}/>
      <Experiences experienceData={experienceData}/>
      <Contact/>
      <Footer/>

      <PortfolioModal/>
    </div>
  )
}

export default App;
