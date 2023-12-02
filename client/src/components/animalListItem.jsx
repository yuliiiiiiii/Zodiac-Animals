import React, { useState } from "react";
import "../styles/animalListItem.scss";
import AnimalInfo from "./animalInfo";

const AnimalListItem = (props) => {
  const { eng, chr, chi, pin, yr, partners, traits} = props.animal;
  const {index} = props.index

  const playSound = props.playSound;
  
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

  // set state to only show AninalInfo when clicked
  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    setclicked(!clicked);
    // toggles the state of clicked to the opposite
  }

  const handleSound = () => {
    // only call the playsound() function when clicked
    playSound(eng)
  }

  return (
    <div className="divvy" >

      <div onClick={handleClick}>
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

        {/* only show <AnimalInfo> when clicked is true */}
        {clicked && <AnimalInfo eng={eng} partners={partners} traits={traits}/>}
      </div>
      
      {/* sound icon should be inside of divvy because postion relative/absolute */}
      <img src={"/images/sound-icon.png"} className="sound-icon" onClick={handleSound}/>

    </div>
  )
}

export default AnimalListItem;