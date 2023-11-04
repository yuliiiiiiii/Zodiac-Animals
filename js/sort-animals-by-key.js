const arr = [...animals]; // copy array of animal obj, so as not to change original
const section = document.querySelector('section'); // get section that holds animals
const menu = document.querySelector('select'); // get menu for choosing sort order
menu.addEventListener('change', sortAnimals); // call function on menu change
const descCB = document.querySelector('input'); // get Descending checkbox
// checkbox calls function on change; this function is short, so we can just 
// write it as an anonymous inline callback function:
descCB.addEventListener('change', () => {
    arr.reverse();
    renderAnimals();
});

function renderAnimals() { // output the 12 animals to the section
    section.innerHTML = ""; // clear section to make way for fresh output
    arr.forEach(animal => { // loop the array of animal objects
        const divvy = document.createElement('div'); // make a div
        divvy.className = 'divvy'; // assign class to div
        section.appendChild(divvy); // output div to section
        const animalImg = new Image(); // make an image
        animalImg.src = `images/animals/${animal.eng}.jpg`; // concat path to jpg
        animalImg.className = 'animal-pic'; // assign class to animal img
        divvy.appendChild(animalImg); // output the image inside the div:
        const charImg = new Image(); // make image to hold Chinese character
        charImg.src = `images/chars/char-${animal.chr}.jpg`; // concat path to char jpg:
        charImg.className = 'chinese-char'; // assign class to character img
        divvy.appendChild(charImg);
        const engSpan = document.createElement('span'); // make a span tag
        engSpan.className = 'english'; // assign class to span tag
        engSpan.textContent = animal.eng; // output English name to span tag
        divvy.appendChild(engSpan); // output span tag to divvy
        // make a span tag to hold Pinyin name of animal
        const pinSpan = document.createElement('span'); // make a span tag
        pinSpan.className = 'pinyin'; // assign class to span tag
        pinSpan.innerHTML = animal.pin; // output Pinyin to span tag (contains HTML entitie, so use innerHTML()
        divvy.appendChild(pinSpan); // output Pin name to divvy
        // make a p tag to hold a string of animal years in 12 year intervals
        const yearsP = document.createElement('p');
        yearsP.className = 'zodiac-year'; // assign class to p-tag
        divvy.appendChild(yearsP); // append p tag to divvy
        // run a loop that starts w current year, and concats
        // years backwards in time, in increments of 12 years 
        let yearsStr = animal.yr + " "; // start a string of years, beginning w current year
        for(let y = 12; y <= 168; y += 12) { // run a loop from 12-168 in increments of 12
            yearsStr += (arr.yr - y) + " "; // concat the next year in 12-year cycle
        }
        yearsP.textContent = yearsStr; // output animal yr string to p-tag
    }); // end forEach()
} // end renderAnimals() function

renderAnimals(); // render animals on page load; default order is by Eng, asc

// sortAnimals() runs on change to select menu:
function sortAnimals() {
    section.innerHTML = ""; // clear section to make way for fresh output
    let k = menu.value; // get menu value, which is sort key "eng", "chi" or "yr"
    // if sort key is "yr" (year), do a number sort
    // if sort key is "eng" or "chi", do a string sort
    // use dynamic obj key accessor syntex: [k], where k is either "eng" or "chi":
    k == "yr" ? arr.sort((a,b) => a.yr-b.yr) : arr.sort((a,b) => a[k]>b[k] ? 1 : -1);
    if(descCB.checked) animals.reverse(); // if Descending is checked; reverse sort
    renderAnimals(); // re-render the newly sorted animals
}