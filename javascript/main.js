
const hamburgerMenu = document.querySelector('.menuBtn');
const navMenu = document.querySelector('.nav__List');
const clickMe = document.querySelector('.clickMe');
const mobileAbout = document.querySelector('.mobileContainer');
const leliaImg = document.querySelector('.leliaImg');

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
    mobileAbout.classList.toggle('aboutActive');
})