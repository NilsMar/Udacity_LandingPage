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
    newSection.addEventListener('click',scroll => {
        newSection.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    })
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
for  (let i = 3; i<=20; i++){
    let newSection = document.createElement('section');
    fragment.appendChild(newSection);
    newSection.innerHTML = clonedSection.innerHTML
    newSection.id = 'section'+(i+1);
    newSection.setAttribute("data-nav",'Section '+(i+1));
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
function buildMenu()
{
    for(let section of sections){
    let navItem=document.createElement("li")
    navItem.className = "menu__link";
    navItem.setAttribute("data-link",section.dataset.nav.replace(" ","").toLowerCase())
    navItem.innerText = section.dataset.nav;
    navItem.addEventListener("click",() =>{
        let i = document.getElementById(navItem.getAttribute("data-link"))
        i.scrollIntoView(
        {
            behavior: "smooth",
            block:"center"

        })
        console.log(i)
    })
    nav.appendChild(navItem);
    };
}
buildMenu()


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll(".landing__container")
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


