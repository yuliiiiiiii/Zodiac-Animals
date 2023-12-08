import { createContext, useContext, useState } from "react";
import { animals } from "../animals_data";

export const selectContext = createContext();

export default function SelectProvider(props) {
  
  const [sortedAnimals, setSortedAnimals] = useState(animals)

  const [check, setCheck] = useState(false)

  const handleCheck = (eventCheck) => {
    if (eventCheck.target.checked) {
      setCheck(true);
      setSortedAnimals(sortedAnimals.reverse());
    } else {
      setCheck(false);
      setSortedAnimals(sortedAnimals.reverse());
    }
  }

  const handleSort = (eventSort) => {
    // console.log("event.target.value:", value)
    const value = eventSort.target.value;
    
      // get a copied array to show the change between sorted and original array(newAnimals and sortedAnimals)
    // setSortValue(value);
    let newAnimals = [...sortedAnimals]
    if ( value == "yr" ) {
      newAnimals.sort((a,b) => a.yr - b.yr);
    } else {
      newAnimals.sort((a,b) => a[value] > b[value] ? 1 : -1);
    }

    // user may click descend before selectiong an option to sort
    if (check) {
      setSortedAnimals(newAnimals.reverse())
    } else  {
      setSortedAnimals(newAnimals)
    } 
  }
    
  const selectData = {
   sortedAnimals,
   handleCheck,
   handleSort
  };

  return (
    <selectContext.Provider value={selectData}>
     {props.children}
     {/* This is the components what are wrapped by the SelectProvider, see App.js */}
    </selectContext.Provider>
  );
}