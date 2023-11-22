import React from 'react';
import '../styles/wheel.scss'
import { useEffect } from 'react';

const Wheel = (props) => {

    // useEffect(()=> {
    //   setInterval(() => wheel.style.transform += 'rotate(0.1deg)', 25);
    // }, [])
    //// useEffect is triggered everytime there's browser re-render(like a state change, so user don't have to call it)

  return (
    <div>
      <img className="wheel" src='images/wheel-slices/zodiac-animals-wheel.png'/>
    </div>
  )
};

export default Wheel;