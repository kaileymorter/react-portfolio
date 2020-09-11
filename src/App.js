import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact'
import './App.css';

function App() {
  
  return (
    <div>
      <Header></Header>
      <ContactForm></ContactForm>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
