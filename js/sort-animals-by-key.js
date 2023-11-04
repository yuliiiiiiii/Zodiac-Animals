// get the section that will hold all the animals
const section = document.querySelector('section');
// get the select menu for sorting animals
const sortMenu = document.querySelector('select');
// sortMenu calls sortAnimals() function on change:
sortMenu.addEventListener('change', sortAnimals);
// get the sort Descending checkbox:
const descendingCB = document.querySelector('input');
// checkbox calls reverseSort() function on change:
descendingCB.addEventListener('change', reverseSort);

// renderAnimals() runs on page load and whenever 
// change is made to the select menu or checkbox
// loop the array of animals objects data in the file
// zodiac-animals-data.js
function renderAnimals() {
    section.innerHTML = "";
    animalsObjArr.forEach((animal, i) => {
        // make a div to hold the animal
        const divvy = document.createElement('div');
        divvy.className = 'divvy'; // assign class to div
        section.appendChild(divvy); // output div to section
        // make an image to put in the div
        const pic = new Image();
        // concatenate path to animal jpg:
        pic.src = `images/animals/${animal.eng}.jpg`;
        pic.className = 'animal-pic'; // assign class to div
        // output the image inside the div:
        divvy.appendChild(pic);
        // make the image to hold the Chinese character
        const char = new Image();
        // concatenate path to character jpg:
        char.src = `images/chars/char-${animal.chr}.jpg`;
        char.className = 'chinese-char';
        divvy.appendChild(char);
        // make a span tag to hold the English name of the animal
        const engSpan = document.createElement('span');
        engSpan.className = 'english';
        engSpan.textContent = animal.eng;
        divvy.appendChild(engSpan); // output Eng name to divvy
        // make a span tag to hold Pinyin name of animal
        const pinSpan = document.createElement('span');
        pinSpan.className = 'pinyin';
        pinSpan.innerHTML = animal.pin; // can't use textContent
        divvy.appendChild(pinSpan); // output Pin name to divvy
        // make a p tag to hold a series of animal years
        const pTag = document.createElement('p');
        pTag.className = 'zodiac-year'; // assign class to p-tag
        divvy.appendChild(pTag); // append p tag to divvy
        // run a loop that starts w current year, and concats
        // years going back in time, in increments of 12 years 
        let yearSeries = animal.year + " ";
        for(let y = 12; y <= 168; y+=12) {
            yearSeries += (animal.year - y) + " ";
        }
        pTag.textContent = yearSeries; // put animal yr string in p-tag
        }); // end forEach()
} // end renderAnimals() function

// render animals on page load. 
// Default sort order is by English name, ascending
renderAnimals();

// sortAnimals() runs on change to select menu:
function sortAnimals() {
    // clear the section to make way for fresh output
    section.innerHTML = "";
    // get the value of the select menu: eng, chi or year
    // these are the 3 possible sort keys
    let sortKey = sortMenu.value;
    // if sortKey is year, use the sort by number key algo:
    if(sortKey == "year") {
        animalsObjArr.sort((a,b) => a.year - b.year); // num key sort
    } else { // key is "eng" or "pin", so do string key sort
        // don't know which key, so use var key accessor: obj[var]
        animalsObjArr.sort((a,b) => a[sortKey] > b[sortKey] ? 1 : -1);
    }
    // The sort is in ascending order, but the Descending checkbox
    // may be checked; if so, reverse the sort:
    if(descendingCB.checked) { // Descending checkbox is checked
        animalsObjArr.reverse();
    }
    // the sort is done, so re-render the animals:
    renderAnimals();
}

// runs whenever checkbox is checked or unchecked:
function reverseSort() {
    animalsObjArr.reverse();
    renderAnimals();
}