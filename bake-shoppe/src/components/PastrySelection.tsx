import React from 'react'

interface SplitSelectionProps {
    mode: 'light' | 'dark'
}

const PastrySelection: React.FC<SplitSelectionProps> = ({mode = 'light'}) => {
  return (
    <div>PastrySelection</div>
  )
}

export default PastrySelection;
