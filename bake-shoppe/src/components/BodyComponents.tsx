import React from 'react'
import MainTeam from './MainTeam'
import PastrySelection from './PastrySelection'
import SplitSelection from './SplitSelection'

interface BodyComponentsProps {
    mode : 'light' | 'dark'
}

const BodyComponents: React.FC<BodyComponentsProps> = ({mode = 'light'}:BodyComponentsProps) => {


  return (
    <div>
        <MainTeam mode={mode}/>
        <PastrySelection mode={mode}/>
        <SplitSelection mode={mode}/>
    </div>
  )
}

export default BodyComponents
