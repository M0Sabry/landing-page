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

let pageSections=get_pageSections();
let	active_Sec=pageSections[0];
let navList=document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function get_pageSections(){
	return document.querySelectorAll('section');
}

function isInViewport(htmlElement) {
  var position = htmlElement.getBoundingClientRect();
  return (position.top >= 0 && position.bottom <= window.innerHeight);
}

function getClosestToTop(){
	for (let section of pageSections){
		if(isInViewport(section))
		{
			setActiveSec(section);
		}
	}
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
	for(let section of pageSections){
		let navElement=document.createElement('a');
		navElement.href='javascript:;';
		navElement.textContent=section.dataset.nav;
		navElement.setAttribute('data-anchor_id', section.id);
		navElement.classList.add('menu__link');
		navList.appendChild(navElement);
	}
}

// Add class 'active' to section when near top of viewport
function setActiveSec(currentSec){
	active_Sec.classList.toggle('your-active-class');
	currentSec.classList.toggle('your-active-class');
	active_Sec=currentSec;
}

// Scroll to anchor ID using scrollTO event
function scrollToSec(evt){
	if(evt.target.nodeName==='A'){
		let currentSec=document.getElementById(evt.target.dataset.anchor_id);
		setActiveSec(currentSec);
		currentSec.scrollIntoView({ behavior: 'smooth'});
	}
}

document.getElementById('navbar__list').addEventListener('click',scrollToSec);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded',buildNav);
// Scroll to section on link click
window.addEventListener('scroll',getClosestToTop);
// Set sections as active


