import React, { useContext, useEffect } from "react";
import "../styles/animalList.scss";
import AnimalListItem from "./animalListItem";
// import { animals } from "../animals_data";
import { selectContext } from "../providers/SelectProvider";

const AnimalList = () => {
  const { sortedAnimals, fetchAnimals } = useContext(selectContext)

  useEffect(() => {
    fetchAnimals();
  }, [])

  // define the playSound function at a higher level, and pass it down as a prop, so that all the child components(AnimalListItem) know which sound is playing, both within one card or between different cards
  const sound = new Audio()
  const playSound = (english) => {
    sound.pause();
    sound.src = `/audio/${english}.mp3`;
    sound.play();
  }

  const animalArray = sortedAnimals.map((animal) => {
    return (
      <AnimalListItem 
        key={animal.id}
        animal={animal}
        id={animal.id}
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