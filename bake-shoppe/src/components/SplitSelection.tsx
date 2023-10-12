import React from 'react'
import PastryWidget from './PastryWidget'

interface WebPageMode {
    mode: 'light' | 'dark'
}

const SplitSelection: React.FC<WebPageMode> = ({mode = 'light'}) => {
    

  return (
    <div>
      <PastryWidget mode={mode} />
    </div>
  )
}

export default SplitSelection;