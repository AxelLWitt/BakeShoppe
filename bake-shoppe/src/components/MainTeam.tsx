import React from 'react'


interface BodyComponentsProps {
    mode: 'light' | 'dark'
}

const MainTeam: React.FC<BodyComponentsProps> = ({mode = 'light'}) => {
  return (
    <div>
        <img src='../../images/Screenshot 2023-10-09 at 2.39 1.png'/>
        <div>
            <h1>'Main Text'</h1>
            <p>'supoorting text'</p>
        </div>
    </div>
  )
}

export default MainTeam