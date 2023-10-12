import React from 'react'
import PastryWidget from './PastryWidget'

interface PastryItem {
  photo: string;
  name: string;
  description: string;
  price: string;
  noBorder?: boolean;
}

const pastryData: PastryItem[] = [
  {
    photo: '/photos/TomoatoBread.png',
    name: 'Swiss Museli Rolls',
    description: 'Honey-sweetened sourdough roll studded with hazelnuts, cranberries, dates, and seeds.',
    price: '4.95',
  },
    {
      photo: '/photos/SwissRolls.png',
      name: 'Swiss Museli Rolls',
      description: 'Honey-sweetened sourdough roll studded with hazelnuts, cranberries, dates, and seeds.',
      price: '4.95',
    },
]

const SplitSelection: React.FC = () => {
    

  return (
    <div className='pastryWidgetContainer'>
      <PastryWidget />
      <PastryWidget />
    </div>
  )
}

export default SplitSelection;