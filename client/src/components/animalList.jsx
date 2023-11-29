import React from "react";
import "../styles/animalList.scss";
import AnimalListItem from "./animalListItem";
import { animals } from "../animals_data";

const AnimalList = () => {

  const animalArray = animals.map((animal, index) => {
    return (
      <AnimalListItem 
        key={index}
        animal={animal}
        index={index}
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