import React from "react";
import "../styles/animalListItem.scss";

const AnimalListItem = (props) => {
  const { eng, chr, chi, pin, yr, partners, traits, index} = props;

  return (
    <div>
      <img src={`/images/animals/${eng}.jpg`} />
      {/* the url is not correct form! */}
    </div>
  )
}

export default AnimalListItem;