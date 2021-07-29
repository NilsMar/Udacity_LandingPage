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
/*
const navbarMenu = document.getElementById("navbar__list");
//select sections
const sections = document.querySelectorAll("section");
//build a nav
function createNav(){
  for (let item of sections){
    let section = document.createElement("li");
    section.className = "menu__link";
    section.innerText = item.dataset.nav;
    navbarMenu.appendChild(section);

  };
};
createNav();
/*
/**
 * Define Global Variables
 *
*/
const sectionContainer = document.getElementsByTagName('main')[0];
let lastSection = document.getElementById('section3');
const clonedSection = lastSection.cloneNode(true);
const fragment = document.createDocumentFragment();


/**
 * End Global Variables


 * Start Helper Functions
 *


*/
for  (let i = 3; i<=7; i++){
    let newSection = document.createElement('section');
    fragment.appendChild(newSection);
    newSection.innerHTML = clonedSection.innerHTML
    newSection.id = 'section'+i;
    newSection.class =  'Section'+i;
    newSection.getElementsByTagName('h2')[0].innerHTML = 'Section ' +(i+1)

}

sectionContainer.appendChild(fragment);

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

const nav = document.querySelector('#navbar__list');
const sections=document.getElementsByTagName("section");
function createNav()
{
    for(let section of sections){
    let navItem=document.createElement("li")
    navItem.innerText = 'hii';
    navItem.className = 'nav_link';
    nav.appendChild(navItem);
    };
}
createNav()





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


