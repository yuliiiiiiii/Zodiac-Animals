import React from "react";
import './App.css';
import Wheel from './components/wheel';
import AnimalContainer from "./components/animalContainer";
import SelectProvider from "./providers/SelectProvider";

function App() {
  return (
    <div className="App">
      <Wheel />

      {/* wrap the component with SelectProvider to set the scope */}
      <SelectProvider>
        <AnimalContainer />
      </SelectProvider>

    </div>
  );
}

export default App;
