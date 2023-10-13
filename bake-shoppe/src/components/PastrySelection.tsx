import React from 'react';
import PastryCard from './PastryCard';


interface PastryItem {
  photo: string;
  name: string;
  description: string;
  price: string;
  noBorder?: boolean;
}

const pastryData: PastryItem[] = [
  {
    photo: '/photos/SwissRolls.png',
    name: 'Swiss Museli Roll',
    description: 'Honey-sweetened sourdough roll studded with hazelnuts, cranberries, dates, and seeds.',
    price: '4.95',
  },
  {
    photo: '/photos/CheeseSticks.png',
    name: 'Cheese Straw',
    description: 'Flaky pastry delicately intertwined with creamy Gouda cheese for a savory delight.',
    price: '3.50',
  },
  {
    photo: '/photos/LemonCake.png',
    name: 'Life Gives You Lemons Cake',
    description: 'Lemon pound cake, delicately moist, topped with irresistible streusel crumbs.',
    price: '15.95',
  },
  {
    photo: '/photos/LemonCake.png',
    name: 'Life Gives You Lemons Cake',
    description: 'Lemon pound cake, delicately moist, topped with irresistible streusel crumbs.',
    price: '15.95',
  },
];

const PastrySelection: React.FC = () => {
  const limitedData = pastryData.slice(0, 3);
  const pastryItems = limitedData.map((item, index) => {
    const removeUnderLine = item.noBorder ? 'no-border': ''

    return (
      <PastryCard
        key={index}
        photo={item.photo}
        name={item.name}
        description={item.description}
        price={item.price}
        removeUnderLine={index===2}
      />
    );
  });

  // Return your JSX with the mode class applied
  return <div className={`pastryDisplay`}>{pastryItems}</div>;
};

export default PastrySelection;
