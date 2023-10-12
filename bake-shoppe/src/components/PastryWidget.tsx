import React from 'react'

interface PastryCardProps {
  photo: string;
  name: string;
  description1: string;
  description2: string;
  description3: string;
  price: string;
}

const PastryWidget:React.FC<PastryCardProps> = ({photo, name, description1, description2, description3, price}) => {
  return (
    <div>
        <div className='pastryWidget'>
          <div className='widgetImage'>
            <img src={photo} className='widgetPhoto'></img>
          </div>
          <div className='pastryWidgetText'>
                <h1>{name}</h1>
                <p>{description1}</p>
                <p>{description2}</p>
                <p>{description3}</p>
                <h2>${price}</h2>
                <button className='buttonClass widgetButton'>Add</button>
            </div>
          </div>
        </div>
  )
}

export default PastryWidget
