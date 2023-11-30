import React from "react";
import "../styles/animalListItem.scss";
import AnimalInfo from "./animalInfo";

const AnimalListItem = (props) => {
  const { eng, chr, chi, pin, yr, partners, traits} = props.animal;
  const {index} = props.index
  
  const formatPinYin = <span className="pinyin" dangerouslySetInnerHTML={{ __html: pin }}></span>
  // by default, any content rendered inside {} is treated as a text node, which means it will escape any HTML entities or tags.
  // dangerouslySetInnerHTML can expose my app to cross-site scripting vulnerabilities. As long as the `pin` props is not user-generated or is properly sanitized, it shoule be fine.

  let yearStr = ""
  const years = () => {
    for (let i=1; i<12; i++) {
     yearStr += yr - 12*i + " "
    }
    return yearStr
  }

  return (
    <div className="divvy">
      <img src={`/images/animals/${eng}.jpg`} className="animal-pic"/>
      <img src={`/images/chars/char-${chr}.jpg`} className="chinese-char"/>
      <span className="english">
        {eng}
      </span>
      {formatPinYin}
      <p className="zodiac-year">
        <span>{yr} </span>
        {years()}
      </p>
      <img src={"/images/sound-icon.png"} className="sound-icon"/>
      <AnimalInfo eng={eng} partners={partners} traits={traits}/>
    </div>
  )
}

export default AnimalListItem;