import React from "react";
import '../styles/select.scss'

const Select = () => {

  return (
    <div>
      <select>
        <option value="choose">Sort by...</option>
        <option value="eng" selected>English Name</option>
        <option value="chi">Chinese Name</option>
        <option value="yr">Year</option>
      </select>

      <input type="checkbox" className="cb" value="desc" />
      <label for="cb">Descending</label>
      <p> - Click Animal to Show / Hide More Info</p>


    </div>
  )
}

export default Select