import { createContext, useContext, useState } from "react";
import { animals } from "../animals_data";

export const selectContext = createContext();

export default SelectProvider = () => {
  

  const selectData ={

  };

  return (
    <selectContext.Provider value={selectData}>
     {props.children}
    </selectContext.Provider>
  );
}