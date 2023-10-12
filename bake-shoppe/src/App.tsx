import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './context/ThemeContext'
import BodyComponents from './components/BodyComponents';
import Carousel from './components/Carousel'
import Horizontal from './components/Horizontal';

function App() {
  const [mode, setMode] = useState<'light'|'dark'>('light');

  return (
    <div className={`App ${mode}`}>
      <Carousel/> 
      <Horizontal/>
      <BodyComponents mode={mode}/>
    </div>
  );
}

export default App;
