import React from 'react'
import PastryWidget from './PastryWidget'

interface PastryItem {
  photo: string;
  name: string;
  description1: string;
  description2: string;
  description3: string;
  price: string;
  noBorder?: boolean;
}

const pastryData: PastryItem[] = [
  {
    photo: '/photos/TomatoBread.png',
    name: 'Tomato Croissant',
    description1: 'Taste of summer',
    description2: 'Flaky pastry' ,
    description3:'Pure tomato bliss!.',
    price: '6.95',
  },
    {
      photo: '/photos/FruitTart.png',
      name: 'Blue Red White Pie',
      description1: 'Fruit Tart Passover',
      description2: 'Passover Favorites', 
      description3: 'Delicious flourless favorites',
      price: '19.95',
    },
]

const SplitSelection: React.FC = () => {
    const limitedData = pastryData.slice(0,2);
    const pastryItems = limitedData.map((item, index) => {
  
      return (
        <PastryWidget
          key={index}
          photo={item.photo}
          name={item.name}
          description1={item.description1}
          description2={item.description2}
          description3={item.description3}
          price={item.price}
        />
      );
    });

  return (
    <div className='pastryWidgetContainer'>
      {pastryItems}
    </div>
  )
}

export default SplitSelection;

