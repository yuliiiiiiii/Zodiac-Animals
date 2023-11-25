import React from "react";
import "../styles/animalListItem.scss";

const AnimalListItem = (props) => {
  const { eng, chr, chi, pin, yr, partners, traits} = props.animal;
  const {index} = props.index

  return (
    <div>
      {/* <img src={`/images/animals/${eng}.jpg`} /> */}
      {/* the url is not correct form! */}
      <span>
        {eng}
      </span>
    </div>
  )
}

export default AnimalListItem;