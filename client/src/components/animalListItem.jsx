import React from "react";
import "../styles/animalListItem.scss";

const AnimalListItem = (props) => {
  const { eng, chr, chi, pin, yr, partners, traits} = props.animal;
  const {index} = props.index
  
  const formatPinYin = () => {
    return <span className="pinyin" dangerouslySetInnerHTML={{ __html: pin }}></span>
  }

  return (
    <div>
      <img src={`/images/animals/${eng}.jpg`} className="animal-pic"/>
      <img src={`/images/chars/char-${chr}.jpg`} className="chinese-char"/>
      <span className="english">
        {eng}
      </span>
      {formatPinYin()}
    </div>
  )
}

export default AnimalListItem;