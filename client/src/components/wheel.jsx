import React from 'react';
import '../styles/wheel.scss'

const Wheel = (props) => {

    // const spin = () => {
    //   setInterval(() => wheel.style.transform += 'rotate(0.1deg)', 25);
    // }
    // spin()

  return (
    <div>
      <img className="wheel" src='images/wheel-slices/zodiac-animals-wheel.png'/>
    </div>
  )
};

export default Wheel;