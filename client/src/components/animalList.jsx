import React, { useContext } from "react";
import "../styles/animalList.scss";
import AnimalListItem from "./animalListItem";
// import { animals } from "../animals_data";
import { selectContext } from "../providers/SelectProvider";

const AnimalList = () => {
  const { sortedAnimals } = useContext(selectContext)

  // define the playSound function at a higher level, and pass it down as a prop, so that all the child components(AnimalListItem) know which sound is playing, both within one card or between different cards
  const sound = new Audio()
  const playSound = (english) => {
    sound.pause();
    sound.src = `/audio/${english}.mp3`;
    sound.play();
  }


  const animalArray = sortedAnimals.map((animal, index) => {
    return (
      <AnimalListItem 
        key={index}
        animal={animal}
        index={index}
        playSound={playSound}
      />
    )
  })

  return (
    <section>
      {animalArray}
    </section>
  )
}

export default AnimalList;