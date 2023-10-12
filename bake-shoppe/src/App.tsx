import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useTheme } from './components/ThemeContext';
import logo from './logo.svg';
import './App.css';
import BodyComponents from './components/BodyComponents';
import Carousel from './components/Carousel'
import Horizontal from './components/Horizontal';



function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme === 'light' ? 'light-theme' : 'dark-theme'}`} id={theme}>
      <Navbar />
      <Carousel /> 
      <Horizontal/>
      <BodyComponents />
      <Footer />
    </div>
  );
}

export default App;
