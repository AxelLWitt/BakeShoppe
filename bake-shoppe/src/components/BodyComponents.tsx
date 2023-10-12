import React from 'react'
import MainTeam from './MainTeam'
import PastrySelection from './PastrySelection'
import SplitSelection from './SplitSelection'

const BodyComponents: React.FC = () => {

  return (
    <div className='bodyContainer'>
        <MainTeam />
        <PastrySelection />
        <SplitSelection />
    </div>
  )
}

export default BodyComponents;
