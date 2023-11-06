// L@@K CHALLENGE !!: SORTING ARRAY of OBJECTS by NUM and STR KEYS
// Provide the missing code in the 3 spots that say "L@@K CHALLENGE !!"

const arr = [...animals]; // copy array of animal obj, so as not to change original
const section = document.querySelector('section'); // get section that holds animals
const menu = document.querySelector('select'); // get menu for choosing sort order
menu.addEventListener('change', sortAnimals); // call function on menu change
const descCB = document.querySelector('input'); // get Descending checkbox
// checkbox calls function on change; this function is short, so we can just 
descCB.addEventListener('change', () => {
    arr.reverse(); 
    renderAnimals();
})
// L@@K CHALLENGE !!
//  write function that runs when checkbox is checked or unchecked
// - this code is very short, so rather than declare a function for this
// - write an anonymous inline callback function right inside the addEventListener
// - function calls reverse() method on the array to reverse the order of objects
// - function ends by calling the renderAnimals() function

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
        // make a span tag to hold English name of animal
        const engSpan = document.createElement('span');
        engSpan.className = 'english';
        engSpan.textContent = animal.eng;
        divvy.appendChild(engSpan); // output Eng name to divvy
        // make a span tag to hold Pinyin name of animal
        const pinSpan = document.createElement('span');
        pinSpan.className = 'pinyin';
        pinSpan.innerHTML = animal.pin; // can't use textContent, due to HTML entities
        divvy.appendChild(pinSpan); // output Pin name to divvy
        // make a p tag to hold a string of animal years in 12 year intervals
        const yearsP = document.createElement('p');
        yearsP.className = 'zodiac-year'; // assign class to p-tag
        divvy.appendChild(yearsP); // append p tag to divvy
        // run a loop that starts w current year, and concats
        // years backwards in time, in increments of 12 years 
        let yearsStr = animal.year + " ";
       
        // L@@K CHALLENGE !! -- write the for loop that concats the yearsStr
        // there should be a total of 12 years: 2020 2008 1996 1984 1972 1960
        // for(?; ?; ?) {
        // }

        yearsP.textContent = yearsStr; // put animal yr string in p-tag
    }); // end forEach()
} // end renderAnimals() function

renderAnimals(); // render animals on page load; default order is by Eng, asc

// sortAnimals() runs on change to select menu:
function sortAnimals() {

    section.innerHTML = ""; // clear section to make way for fresh output
    let k = menu.value; // get menu value, which is sort key "eng", "chi" or "yr"
    
    // L@@K CHALLENGE !! -- write the sort logic that sorts by key
    // if sort key is "yr" (year), which is a number, do a number-key sort
    // else sort key is "eng" or "chi", which are strings, so do a string-key sort
    // use dynamic obj key accessor syntex: [k], where k is either "eng" or "chi":
    // do this as an if-else OR BONUS: use a ternary to do it ALL in ONE line

    if(descCB.checked) animals.reverse(); // if Descending is checked; reverse sort:
    renderAnimals(); // re-render the newly sorted animals
}

function playSound() {
    // 
}

const wheel = document.querySelector('.wheel'); // get the wheel and spin it:
setInterval(() => wheel.style.transform += 'rotate(0.1deg)', 25);