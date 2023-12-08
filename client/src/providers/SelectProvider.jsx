import { createContext, useContext, useState } from "react";
import { animals } from "../animals_data";

export const selectContext = createContext();

export default function SelectProvider(props) {
  
  const [sortedAnimals, setSortedAnimals] = useState(animals)

  //  const [check, setCheck] = useState(false)

  const handleSort = (event) => {
    // console.log("event.target.value:", value)
   
    const value = event.target.value;
    const checked = event.target.checked
    console.log("checked:", checked)
    console.log("value:", value)

    // get a copied array to show the change between sorted and original array(newAnimals and sortedAnimals)
    // setSortValue(value);
    let newAnimals = [...sortedAnimals]
    if ( value == "yr" ) {
      newAnimals.sort((a,b) => a.yr - b.yr);
    } else {
      newAnimals.sort((a,b) => a[value] > b[value] ? 1 : -1);
    }
   
    // setCheck(checked)
    // console.log("check state:", check);
   
      if (checked == undefined) {
         setSortedAnimals(newAnimals) 
      } 
    
      if (checked !== undefined) {
        checked ? setSortedAnimals(newAnimals.reverse()) : setSortedAnimals(newAnimals) 
      }
    }

    // setSortedAnimals(newAnimals)
  

  const selectData = {
   sortedAnimals,
   handleSort
  };

  return (
    <selectContext.Provider value={selectData}>
     {props.children}
     {/* This is the components what are wrapped by the SelectProvider, see App.js */}
    </selectContext.Provider>
  );
}