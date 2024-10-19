import React from 'react'

interface prop {
    description: string
}

const Hero: React.FC<prop> = ({description}) => {
  return (
    <hgroup>
          <h3>Stay Ahead with WeatheRoo</h3>
          <br/>
          <h4>{description}</h4>
    </hgroup>
  )
}

export default Hero