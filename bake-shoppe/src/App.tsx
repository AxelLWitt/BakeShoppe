import React, {useState} from 'react';
import logo from './logo.svg';
import { ThemeContext } from './context/ThemeContext'; //this will be updated in the nav bar through the tap function
import './App.css';
import BodyComponents from './components/BodyComponents';
import Carousel from './components/Carousel';

function App() {
  const [mode, setMode] = useState<'light'|'dark'>('light');

  return (
    <div className={`App ${mode}`}>
      <BodyComponents mode={mode}/>
      <Carousel />
    </div>
  );
}

export default App;
