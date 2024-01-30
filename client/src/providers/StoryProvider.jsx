import { createContext, useState } from "react";
import axios from "axios";
export const storyContext = createContext();

export default function StoryProvider(props) {
  
  const [stories, setStories] = useState([]);

  const fetchStories = async(animal_id) => {
    try {
      const res = await axios.get(`http://localhost:8080/animals/ai/${animal_id}`)

      const animalStoriesWithNam = res.data
      // setStory(animalStories);
      console.log("unparse animal stories with name:", animalStoriesWithNam)
      
      setStories(animalStoriesWithNam)
      

    } catch(e) {
      console.error("Could not fetch stories from server", e);
    }
  }

  const createStories = (animal_id) => {
    axios.post('http://localhost:8080/animals/create', {
        id: animal_id
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const storyData = {
    stories,
    fetchStories,
    createStories
  }

  return (
    <storyContext.Provider value={storyData}>
      {props.children}
    </storyContext.Provider>
  );
}