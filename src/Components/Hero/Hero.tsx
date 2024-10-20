import React from 'react'

interface prop {
    description: string,
    address: string,
}

const Hero: React.FC<prop> = ({description, address}) => {
  return (
    <hgroup>
          <h3>Stay Ahead with WeatheRoo</h3>
          <br/>
          <h4>{description}</h4>
          <br />
          <h5>Current weather and forecast for the week at:</h5>
          <h5>{address}</h5>
    </hgroup>
  )
}

export default Hero