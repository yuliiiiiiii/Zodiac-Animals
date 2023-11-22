import React, { useEffect, useState } from 'react';
import '../styles/wheel.scss'

const Wheel = (props) => {

  const [angle, setAngle] = useState(0);

  useEffect(()=> {
    setInterval(() => setAngle(prevAngle => prevAngle + 0.1), 25);
  }, [])
 //// useEffect is triggered only once. [] means the effect doesn't use any value that participate in React data flow, so it is only called once when the page is rendered

  return (
    <div>
      <img 
      className="wheel" 
      src='images/wheel-slices/zodiac-animals-wheel.png' 
      style={{transform: `rotate(${angle}deg)` }}
      />
    </div>
  )
};

export default Wheel;