import { createContext, useContext, useState } from "react";
import { animals } from "../animals_data";

export const selectContext = createContext();

export default function SelectProvider(props) {
  
  const [sortedAnimals, setSortedAnimals] = useState(animals)
  

  const selectData = {
   sortedAnimals,
  };

  return (
    <selectContext.Provider value={selectData}>
     {props.children}
     {/* This is the components what are wrapped by the provider, see App.js */}
    </selectContext.Provider>
  );
}