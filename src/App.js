import React from 'react';
import Home from './components/home/Home';
import Header from './Header';
import Mainpage from './components/Mainpage';
import Footer from './components/Footer';
import './App.css';
 
function App() {
  return (
    <>
    <div>
  <Header/>
      <Home/>
    <Mainpage/>
    <Footer/>
    </div>
    </>
  )
}

export default App
