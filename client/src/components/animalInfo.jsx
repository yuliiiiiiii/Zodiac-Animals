import React from "react";
import "../styles/animalInfo.scss"

const AnimalInfo = (props) => {
const { eng, partners, traits} = props;

  return (
    <div className="divvy animal-info" >
      <p className="animal-name">{eng}</p>
      <p>Partners: {partners}</p>
      <p>Characteristics: {traits}</p>
    </div>
  )
  
}

export default AnimalInfo;