// CODING CHALLENGE: 
// Provide the missing code 
// wherever you see CHALLENGE

// get the section that will hold all the animals
const section = document.querySelector('section');
// get the select menu for sorting animals
const sortMenu = document.querySelector('select');
// sortMenu calls sortAnimals() function on change:
sortMenu.addEventListener('change', sortAnimals);

// CHALLENGE: get the sort Descending checkbox:
// and have it call the reverseSort function whenever
// checkbox is changed

// renderAnimals() runs on page load and whenever 
// change is made to the select menu or checkbox
// loop the array of animals objects data in the file
// zodiac-animals-data.js
function renderAnimals() {

    section.innerHTML = ""; // clear existing animals
    // loop the obj array of animals:
    animalsObjArr.forEach((animal, i) => {

        // make a div to hold the animal
        const divvy = document.createElement('div');
        divvy.className = 'divvy'; // assign class to div
        section.appendChild(divvy); // output div to section
        
        // make an image to put in the div
        const pic = new Image();
        pic.className = 'animal-pic'; // assign class to div
        
        // concatenate src file path to animal jpg:
        pic.src = `images/animals/${animal.eng}.jpg`;
        
        // output the animal image inside divvy:
        divvy.appendChild(pic);
        
        // CHALLENGE: make image to hold Chinese character
        // and concat src file path to character jpg 
        
        // output img to divvy:
        divvy.appendChild(char);

        // make a span tag to hold the English name of the animal
        const engSpan = document.createElement('span');
        engSpan.className = 'english';
        engSpan.textContent = animal.eng;
        divvy.appendChild(engSpan); // output Eng name to divvy
        
        // CHALLENGE: make span tag to hold Pinyin name
        
        // make a p tag to hold a series of animal years
        const pTag = document.createElement('p');
        pTag.className = 'zodiac-year'; // assign class to p-tag
        divvy.appendChild(pTag); // append p tag to divvy

        // concat year series, start w current year:
        let yearSeries = animal.year + ' ';

        // CHALLENGE: concat onto yearSeries in a loop, 
        // in increments of 12 years 
        // for(?; ?; ?) {
            // yearSeries;
        // }

        pTag.textContent = yearSeries; // put animal yr string in p-tag
    
    }); // end forEach()
} // end renderAnimals() function

// render animals on page load. 
// Default sort order is by English name, ascending
renderAnimals();

// CHALLENGE: sortAnimals() runs on change to select menu:
function sortAnimals() {

    // clear the section to make way for fresh output
    
    // get the value of the select menu: eng, chi or year
    // these are the 3 possible sort keys
    
    // if sortKey is year, use the sort by number key algo:
    
        // num key sort
    // key is "eng" or "pin", so do string key sort
        // don't know which key, so use var key accessor: obj[var]
    
    // The sort is in ascending order, but the Descending checkbox
    // may be checked; if so, reverse the sort:
        // Descending checkbox is checked

    // the sort is done, so re-render the animals:

}

// CHALLENGE: reverseSort() runs whenever checkbox is checked or unchecked:
function reverseSort() {

  // reverse the sort order with reverse() method

  // call the renderAnimals() function to re-render all
  
}