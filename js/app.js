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
/**
 * Define Global Variables
 *
*/
const sectionContainer = document.getElementsByTagName('main')[0];
let lastSection = document.getElementById('section3');
const clonedSection = lastSection.cloneNode(true);
const fragment = document.createDocumentFragment();
const navMenu = document.getElementsByClassName('navbar__menu')[0];
const topNav = navMenu.offsetTop;




/**
 * End Global Variables

*/


for  (let i = 3; i<=7; i++){
    let newSection = document.createElement('section');
    fragment.appendChild(newSection);
    newSection.innerHTML = clonedSection.innerHTML
    newSection.id = 'section'+(i+1);
    newSection.setAttribute("data-nav",'Section '+(i+1));
    newSection.getElementsByTagName('h2')[0].innerHTML = 'Section ' +(i+1)
    newSection.setAttribute("class","not-active")

}

sectionContainer.appendChild(fragment);



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
    })
    nav.appendChild(navItem);
    }
}
buildMenu()

// Create buttons

function createButtons(){
for (let section of sections){
   let butn =  document.createElement("input");
    butn.setAttribute('type','button');
    butn.setAttribute('name','button');
    butn.setAttribute('value','Go to Section 1');
    butn.className = 'ButtonNot-active'
    butn.onclick = function(){
        sections[0].scrollIntoView(
                {
            behavior: "smooth",
            block:"center"

        })

    }
    section.appendChild(butn)
    }
}

createButtons()

// Add class 'active' to section when near top of viewport

const menuLinks = document.getElementsByClassName('menu__link')

function makeActive(){
    for (let section of sections)
    {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150)
            {
                section.className = "active_section"
                section.getElementsByTagName('input')[0].className = 'activeButton'
                let activeId = document.querySelector('.active_section').id
                for (link of menuLinks){
                    if (activeId == link.getAttribute('data-link'))
                        {link.classList.add('activeNav')}
                    else{
                        link.classList.remove('activeNav')
                        }
                }

    } else {
        section.className = "not-active"
    }
  }
}




document.addEventListener("scroll", function() {
  makeActive();
});



