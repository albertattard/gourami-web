import React, { useState } from 'react'
import './HealthComponent.css';

export const HealthComponent = () => {
  const [health, setHealth] = useState("...")
  const checkHealth = () => { setHealth("up") }

  return <>
    <p className='health-status'>Backend status {health}</p>
    <button onClick={checkHealth}>Check now</button>
  </>
}
