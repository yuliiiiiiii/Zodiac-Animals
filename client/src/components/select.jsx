import React, { useContext }  from "react";
import '../styles/select.scss'
import { selectContext } from "../providers/SelectProvider";

const Select = () => {
  const { handleSort, handleDescend } = useContext(selectContext)

  return (
    <div>
      <select onChange={(event) => handleSort(event.target.value)}>
        <option value="choose" >Sort by...</option>
        <option value="eng" selected>English Name</option>
        <option value="chi">Chinese Name</option>
        <option value="yr">Year</option>
      </select>

      <input type="checkbox" className="cb" onChange={(event) => handleDescend(event.target.checked) }/>
      <label>Descending</label>
      <p> - Click Animal to Show / Hide More Info</p>


    </div>
  )
}

export default Select