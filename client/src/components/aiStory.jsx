import React, { useContext, useState } from "react";
import "../styles/aiStory.scss";
import { selectContext } from "../providers/SelectProvider";

const AiStory = () => {
  
  const { sortedAnimals, stories, fetchStories } = useContext(selectContext)
  
  const [animalId, setAnimalId] = useState(1);

// probably needs to create a new state to control the sequence of select option animal's order(by year), and makes it static so that sort doesn't affect option animal's order!!!
  const optionArray = sortedAnimals.map(animal => {
    return <option key={animal.id} value={animal.id} >{animal.eng}</option>
  })

  const handleClick = () => {
    // console.log("animalId:", animalId)
   fetchStories(animalId);
  }

  const storiesArray = stories.map((story, index) => {
    return <p key={index}> {story.eng.toUpperCase()} : {story.story} </p>
  })

  return (
    <div>
      <select onChange={e => setAnimalId(e.target.value)}>
        {optionArray}
      </select>
      <button onClick={handleClick}>Generate a story</button>
      {storiesArray}
    </div>
  )
}

export default AiStory;
