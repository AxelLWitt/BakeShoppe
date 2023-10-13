import React from 'react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';


interface PastryCardProps {
    photo: string;
    name: string;
    description: string;
    price: string;
    removeUnderLine?: boolean;
}


const PastryCard: React.FC<PastryCardProps> = ({photo, name, description, price, removeUnderLine=false}) => {
    const noBorder = removeUnderLine ? 'no-border': '';
    const [itemCount, setItemCount] = useState(0); // Cart state
    const [svgCounter, setSvgCounter] = useState(0); // SVG counter state
    function handleAddToCart (){
      setItemCount((prevCount) => prevCount + 1);
      console.log('Added to cart', itemCount);
      setSvgCounter((prevCounter) => (prevCounter + 1) % 4); // Cycle through 0 to 3
    };
    return (
        <div className={`${noBorder} pastryCard`}>
            <div className='pastryContainer'>
                <img src={photo} className='pastryPeekIcon'></img>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h2>${price}</h2>
                    <button className='buttonClass pastryButton' onClick={handleAddToCart}>Add To Card</button>
                </div>
            </div>
        </div>
    );
}

export default PastryCard;
