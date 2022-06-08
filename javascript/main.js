
const hamburgerMenu = document.querySelector('.menuBtn');
const navMenu = document.querySelector('.nav__List');
const clickMe = document.querySelector('.clickMe');
const mobileAbout = document.querySelector('.mobileContainer');
const mobileHeading = document.querySelector('.mobileHeading');
const mobileButton = document.querySelector('.mobileBtn');

// header menu

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.listItem').forEach(n => n.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
}))

document.querySelectorAll('.listItemContact').forEach(n => n.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
}))

// clickMe button, about

clickMe.addEventListener('click', () => {
    mobileAbout.classList.add('aboutActive');
    mobileHeading.classList.add('headingActive');
})

mobileButton.addEventListener('click', () => {
    mobileHeading.classList.remove('headingActive');
    mobileAbout.classList.remove('aboutActive');
})