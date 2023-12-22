import React, { useContext, useState } from "react";
import "../styles/aiStory.scss";
import { selectContext } from "../providers/SelectProvider";

const AiStory = () => {
  
  const { sortedAnimals, story, fetchStories } = useContext(selectContext)
  
  const [animalId, setAnimalId] = useState(0);

  const optionArray = sortedAnimals.sort((a,b) => a.yr - b.yr).map(animal => {
    return <option key={animal.id} value={animal.id} >{animal.eng}</option>
  })

  return (
    <div>
      <select >
        {optionArray}
      </select>
      <button>Create an animal story</button>
      <p>{story}</p>
    </div>
  )
}

export default AiStory;
