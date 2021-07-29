/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sectionContainer = document.getElementsByTagName('main')[0];
let lastSection = document.getElementById('section3');
const clonedSection = lastSection.cloneNode(true);


/**
 * End Global Variables


 * Start Helper Functions
 *


*/
for  (let i = 3; i<=7; i++){
    let newSection = document.createElement('section');
    sectionContainer.appendChild(newSection);
    newSection.innerHTML = clonedSection.innerHTML
    newSection.id = 'section'+i;
    newSection.class =  'Section'+i;
    newSection.getElementsByTagName('h2')[0].innerHTML = 'Section ' +(i+1)
    console.log(newSection)

}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


