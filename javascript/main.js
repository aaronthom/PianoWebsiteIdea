window.onload = function () {
    const hamburgerMenu = document.querySelector('.menuBtn');
    const navMenu = document.querySelector('.nav__List');

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
}
