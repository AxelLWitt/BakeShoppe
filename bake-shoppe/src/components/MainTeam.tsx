import React from 'react';
import { useTheme } from './ThemeContext';
import '../App.css'

const MainTeam: React.FC = () => {
  const { theme } = useTheme();

  const teamClass: string = 'teamClass';
  const teamClassText: string = 'teamClassText';
  const teamModal: string = 'teamModal';
  const buttonClass: string = 'buttonClass';

  return (
    <div className={`${theme} ${teamClass}`}>
        <img src={process.env.PUBLIC_URL + '/photos/TeamPhoto.png'} alt='Team Photo' className='teamPhoto'/>
        <div className={`${theme} ${teamModal}`}>
          <div className='textContainer'>
            <h1 className='team'>Baked Fresh Daily with Love</h1>
            <p className={`${teamClassText}`}>Honey-sweetened sourdough roll studded with hazelnuts, cranberries, dates, and seeds.</p>
            <button className={`buttonClass ${theme}`}>Find a Store</button>
          </div>
        </div>
    </div>
  );
}

export default MainTeam;