import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useTheme } from './components/ThemeContext';




function App() {
  const { theme } = useTheme();
  console.log('Rendering App with theme', theme);



  return (
    <div className={`App ${theme === 'light' ? 'light-theme' : 'dark-theme'}`} id={theme}>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
