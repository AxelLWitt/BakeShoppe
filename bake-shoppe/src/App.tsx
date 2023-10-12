import React, {useState} from 'react';
import logo from './logo.svg';
import { ThemeContext } from './context/ThemeContext';//place toggle functionality in the nav bar
import './App.css';
import BodyComponents from './components/BodyComponents';
import Carousel from './components/Carousel'

function App() {
  const [mode, setMode] = useState<'light'|'dark'>('light');

  return (
    <div className={`App ${mode}`}>
      <Carousel/>  
      <BodyComponents mode={mode}/>
    </div>
  );
}

export default App;
