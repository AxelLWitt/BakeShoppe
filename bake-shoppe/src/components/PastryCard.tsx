import React from 'react'
import { useTheme } from '../components/ThemeContext';
interface PastryCardProps {
    photo: string;
    name: string;
    description: string;
    price: string;
    removeUnderLine?: boolean;
  }

const PastryCard: React.FC<PastryCardProps> = ({photo, name, description, price, removeUnderLine=false}) => {
    const noBorder = removeUnderLine ? 'no-border': ''
    const { theme } = useTheme();

  return (
    <div className={`${noBorder} pastryCard`}>
        <div className='pastryContainer'>
        <img src={photo} className='pastryPeekIcon'></img>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <h2>${price}</h2>
                <button className={`buttonClass ${theme}`}>Add To Card</button>
            </div>
        </div>
    </div>
  )
}

export default PastryCard