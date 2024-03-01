import React, { useContext, useState, useEffect } from "react";
import "../styles/aiStory.scss";
import { selectContext } from "../providers/SelectProvider";
import { storyContext } from "../providers/StoryProvider";

const AiStory = () => {
  
  const { sortedAnimals } = useContext(selectContext);
  const { stories, fetchStories, createStories } = useContext(storyContext);
  
  const [animalId, setAnimalId] = useState();

  const animalOptArray = [...sortedAnimals].sort((a,b) => a.yr - b.yr)
  const optionArray = animalOptArray.map(animal => {
    return <option key={animal.id} value={animal.id} >{animal.eng}</option>
  })

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // console.log("animalId:", animalId)
   setClicked(!clicked)
  }
  
  useEffect(() => {
    fetchStories(animalId);
  }, [animalId])

  // check if stories is an empty array(means there's no story from the selected animal)
  const storiesArray = stories[0] 
    ? stories.map((story, index) => {
      return <p key={index}> {story.eng.toUpperCase()} : {story.story} </p>
    }) 
    : <p key={animalId}>No story, please create a story</p>

  const handleCreate = () => {
    createStories(animalId);
    fetchStories(animalId)
  }  

  return (
    <div>
      <select onChange={e => e.target.value !== "non" &&setAnimalId(e.target.value)}>
        <option value="non">Choose an animal</option>
        {optionArray}
      </select>
      <button onClick={handleClick}>{clicked ? "Hide Stories" : "Show Stories"}</button>
      {clicked && storiesArray}
      {clicked && <button onClick={() => handleCreate()}>Create a story</button>}
    </div>
  )
}

export default AiStory;
