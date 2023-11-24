import React from "react";
import AnimalListItem from "./animalListItem";
import { animals } from "../animals_data";

const AnimalList = () => {

  const animalArray = animals.map((animal, index) => {
    return (
      <AnimalListItem 
        id={index}
        animal={animal}
      />
    )
  })

  return (
    <>
      {animalArray}
    </>
    
  )
}

export default AnimalList;