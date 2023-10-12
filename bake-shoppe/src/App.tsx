import React, {useState} from 'react';
import logo from './logo.svg';
import { ThemeContext } from './context/ThemeContext';//place toggle functionality in the nav bar
import './App.css';
import BodyComponents from './components/BodyComponents';
<<<<<<< HEAD
import Carousel from './components/Carousel'
=======
import Carousel from './components/Carousel';
>>>>>>> be855fe202dca4412d9640283c99649381995388

function App() {
  const [mode, setMode] = useState<'light'|'dark'>('light');

  return (
    <div className={`App ${mode}`}>
      <Carousel/>  
      <BodyComponents mode={mode}/>
      <Carousel />
    </div>
  );
}

export default App;
