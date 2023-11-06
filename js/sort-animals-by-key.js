const arr = [...animals]; // copy array of animal obj, so as not to change original
const section = document.querySelector('section'); // get section that holds animals
const menu = document.querySelector('select'); // get menu for choosing sort order
menu.addEventListener('change', sortAnimals); // call function on menu change
const descCB = document.querySelector('input'); // get Descending checkbox

const wheel = document.querySelector('.wheel'); // get the wheel and spin it:
setInterval(() => wheel.style.transform += 'rotate(0.05deg)', 25);

// checkbox calls function on change; this function is short, so we can just 
// write it as an anonymous inline callback function:
descCB.addEventListener('change', () => {
    arr.reverse();
    renderAnimals();
    // orderWheelSlices();
});

function renderAnimals() { // output the 12 animals to the section
    section.innerHTML = ""; // clear section to make way for fresh output
    arr.forEach(animal => { // loop the array of animal objects
        const divvy = document.createElement('div'); // make a div
        divvy.className = 'divvy'; // assign class to div
        // divvy.id = i; // output English name text to span tag
        section.appendChild(divvy); // output div to section
        const animalImg = new Image(); // make an image
        animalImg.src = `images/animals/${animal.eng}.jpg`; // concat path to jpg
        animalImg.className = 'animal-pic'; // assign class to animal img
        divvy.appendChild(animalImg); // output the animal image to the div
        const charImg = new Image(); // make image to hold Chinese character
        charImg.src = `images/chars/char-${animal.chr}.jpg`; // concat path to char jpg
        charImg.className = 'chinese-char'; // assign class to character img
        divvy.eng = animal.eng; // assoc some data w divvy so when divvy is mousedover
        // to call showInfo func, we know which animal it is
        divvy.appendChild(charImg); // output the character image to the div
        const engSpan = document.createElement('span'); // make a span tag
        engSpan.className = 'english'; // assign class to span tag
        engSpan.textContent = animal.eng; // output Pinyin text to span (HTML entities require innerHTML)
        // engSpan.i = i; // output English name text to span tag
        divvy.appendChild(engSpan); // output span tag to divvy
        // make a span tag to hold Pinyin name of animal
        const pinSpan = document.createElement('span'); // make a span tag
        pinSpan.className = 'pinyin'; // assign class to span tag
        pinSpan.innerHTML = animal.pin; // output Pinyin text to span (HTML entities require innerHTML)
        divvy.appendChild(pinSpan); // output Pinyin span name to divvy
        // make a p tag to hold a string of animal years in 12 year intervals
        const yearsP = document.createElement('p'); // make a p tag
        yearsP.className = 'zodiac-year'; // assign class to p tag
        divvy.appendChild(yearsP); // append p tag to divvy
        // run a loop that starts w current year, and concats
        // years backwards in time, in increments of 12 years 
        let yearsStr = `<span> ${animal.yr} </span><br><br>`; // string of years begins w current year
        for(let y = 12; y <= 120; y += 12) { // loop from 12-168 in increments of 12
            yearsStr += (animal.yr - y) + "<br>"; // concat next year in the cycle
        }
        yearsP.innerHTML = yearsStr; // output animal yr string to p-tag
        // make info div, which sits on top of divvy and appears-disappears on click
        const infoDiv = document.createElement('div');
        infoDiv.addEventListener('click', showHideInfo);
        infoDiv.addEventListener('dblclick', showHideInfo);
        infoDiv.innerHTML = `<p class="animal-name">${animal.eng}</p>
        <p>Partners:<br>${animal.partners}</p>
        <p>Characteristics:<br>${animal.traits}</p>`;
        infoDiv.className = 'divvy animal-info';
        divvy.appendChild(infoDiv);
        
    }); // end forEach()
} // end renderAnimals() function

renderAnimals(); // render animals on page load; default order is by Eng, asc

// sortAnimals() runs on change to select menu:
function sortAnimals() {
    section.innerHTML = ""; // clear section to make way for fresh output
    let k = menu.value; // get sort menu value: "eng", "chi" or "yr"
    // if sort key is "yr" (year), do a number sort in ascending order
    // if sort key is "eng" or "chi", do a string sort in ascending order
    // use dynamic obj key accessor, where a[k] is either "eng" or "chi":
    k == "yr" ? arr.sort((a,b) => a.yr - b.yr) : arr.sort((a,b) => a[k] > b[k] ? 1 : -1);
    if(descCB.checked) arr.reverse(); // if Descending is checked; reverse sort
    renderAnimals(); // re-render the sorted animals
    // orderWheelSlices();
}

let infoShowing = false;
function showHideInfo() {
    let infoOpacity;
    infoShowing ? infoOpacity = 0 : infoOpacity = 1;
    this.style.opacity = infoOpacity;
    infoShowing = !infoShowing; // flip boolean
}

// output wheel slices in sort order
// function orderWheelSlices() {
//     // alert('order wheel slices');
//     const wheelSliceHolderDiv = document.createElement('div');
//     document.body.appendChild(wheelSliceHolderDiv);
//     wheelSliceHolderDiv.className = 'wheel-slice-holder';
//     let z = 1;
//     let leftPos = 230;
//     let topPos = 0;
//     let rotAngle = 0;
//     const animalNames = ['dog', 'dragon', 'horse'];
//     for(let i = 0; i < 3; i++) {
//         const wheelSlice = new Image();
//         wheelSlice.src = `images/wheel-slices/${animalNames[i]}-wheel-slice.png`;
//         wheelSlice.className = 'wheel-slice-img';
//         // z++;
//         rotAngle += 30;
//         leftPos += 15;
//         topPos += 40;
//         wheelSlice.style.zIndex = (i+2);
//         wheelSlice.style.transform = `rotate(${rotAngle}deg)`;
//         wheelSlice.style.left = leftPos + "px";
//         wheelSlice.style.top = topPos + "px";
//         wheelSliceHolderDiv.appendChild(wheelSlice);
//     }
// }