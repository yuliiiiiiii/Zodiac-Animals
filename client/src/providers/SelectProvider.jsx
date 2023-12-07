import { createContext, useContext, useState } from "react";
import { animals } from "../animals_data";

export const selectContext = createContext();

export default function SelectProvider(props) {
  
  const [sortedAnimals, setSortedAnimals] = useState(animals)
  
  const [sortValue, setSortValue] = useState("")
  const handleSort = (value) => {
    // console.log("event.target.value:", value)

    // get a copied array to show the change between sorted and original array(newAnimals and sortedAnimals)
    setSortValue(value);
    let newAnimals = [...sortedAnimals]
    if ( value == "yr" ) {
      newAnimals.sort((a,b) => a.yr - b.yr);
    } else {
      newAnimals.sort((a,b) => a[value] > b[value] ? 1 : -1);
    }
    setSortedAnimals(newAnimals)
  }

  const handleDescend = (checked) => {
    if (checked) {
      console.log("event.target.checked:", checked)
      const reveredAnimals = [...sortedAnimals].reverse()
      setSortedAnimals(reveredAnimals)
    } else {
      console.log("event.target.checked:", checked)
      handleSort(sortValue)
    }
  }

  const selectData = {
   sortedAnimals,
   handleSort,
   handleDescend
  };

  return (
    <selectContext.Provider value={selectData}>
     {props.children}
     {/* This is the components what are wrapped by the SelectProvider, see App.js */}
    </selectContext.Provider>
  );
}