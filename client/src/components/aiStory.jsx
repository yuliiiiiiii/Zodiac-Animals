import React, { useContext, useState } from "react";
import "../styles/aiStory.scss";
import { selectContext } from "../providers/SelectProvider";

const AiStory = () => {
  
  const { sortedAnimals, stories, fetchStories } = useContext(selectContext)
  
  const [animalId, setAnimalId] = useState(1);

  const optionArray = sortedAnimals.sort((a,b) => a.yr - b.yr).map(animal => {
    return <option key={animal.id} value={animal.id} >{animal.eng}</option>
  })

  const handleClick = () => {
    // console.log("animalId:", animalId)
   fetchStories(animalId);
  }

  const storiesArray = stories.map((story, index) => {
    return <p key={index}> {story.eng} : {story.story} </p>
  })

  return (
    <div>
      <select onChange={e => setAnimalId(e.target.value)}>
        {optionArray}
      </select>
      <button onClick={handleClick}>Create an animal story</button>
      {storiesArray}
    </div>
  )
}

export default AiStory;
