import React, { useContext } from "react";
import "../styles/aiStory.scss";
import { selectContext } from "../providers/SelectProvider";

const AiStory = (props) => {
  
  const { sortedAnimals } = useContext(selectContext)
  
  const optionArray = sortedAnimals.sort((a,b) => a.yr - b.yr).map(animal => {
    return <option value={animal.eng} >{animal.eng}</option>
  })

  return (
    <div>
      <select >
        {optionArray}
      </select>
      <button>Create an animal story</button>
      <p></p>
    </div>
  )
}

export default AiStory;
