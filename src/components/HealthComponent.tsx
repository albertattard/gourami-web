import React, { useState, useEffect } from 'react'
import './HealthComponent.css';

type HealthResponse = {
  status: string;
}

export const HealthComponent = () => {
  const [health, setHealth] = useState<HealthResponse>({ status: '...' });
  const [style, setStyle] = useState<string>('checking')

  useEffect(() => {
    const checkHealth = async () => {
      fetch('/api/actuator/health')
        .then(response => response.json())
        .then(data => {
          setHealth(data);
          setStyle(data.status === 'UP' ? 'up' : 'unreachable');
        })
        .catch(e => {
          setHealth({ status: 'Unreachable' });
          setStyle('unreachable');
        })
    };

    checkHealth();
  }, []);

  return (<p className={style}>Backend status {health.status}</p>);
}
