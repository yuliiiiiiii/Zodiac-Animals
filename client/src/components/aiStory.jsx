import React, { useContext, useState, useEffect } from "react";
import "../styles/aiStory.scss";
import { selectContext } from "../providers/SelectProvider";
import { storyContext } from "../providers/StoryProvider";

const AiStory = () => {
  
  const { sortedAnimals } = useContext(selectContext);
  const { stories, fetchStories } = useContext(storyContext);
  
  const [animalId, setAnimalId] = useState();

  const animalOptArray = [...sortedAnimals].sort((a,b) => a.yr - b.yr)
  const optionArray = animalOptArray.map(animal => {
    return <option key={animal.id} value={animal.id} >{animal.eng}</option>
  })

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // console.log("animalId:", animalId)
    // fetchStories(animalId);
   setClicked(!clicked)
  }
  
  useEffect(() => {
    fetchStories(animalId);
  }, [animalId, stories])
  // can be an issue here. After update stories table see if it will trigger fectchStories()!!!!

  const storiesArray = stories.map((story, index) => {

    if (!story.story) {
      return <p key={index}> {story.eng.toUpperCase()} : No story, please create a story </p>
    } else {
      return <p key={index}> {story.eng.toUpperCase()} : {story.story} </p>
    }
  })

  return (
    <div>
      <select onChange={e => e.target.value !== "non" &&setAnimalId(e.target.value)}>
        <option value="non">Choose an animal</option>
        {optionArray}
      </select>
      <button onClick={handleClick}>{clicked ? "Hide Stories" : "Show Stories"}</button>
      {clicked && storiesArray}
      {clicked && <button>Create a story</button>}
    </div>
  )
}

export default AiStory;
