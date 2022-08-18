// const toggleButton = document.getElementsByClassName('navbar')[0];
// const navbarLinks = document.getElementsByClassName('.navbar.sticky')[0];

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })

// console.log();

const toggleButton = document.getElementById('navbar');

const closeButton = document.getElementById('close-btn');

const navbarLinks = document.getElementById('nav-links');

const menuBtn = document.getElementById('menu-btn');


menuBtn.addEventListener('click', () => {
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            toggleButton.classList.add('show-menu');
        })
    }
    
    if (toggleButton) {
        toggleButton.classList.remove('show-menu');
    }
})

closeButton.addEventListener('click', () => {
    if (closeButton) {
        toggleButton.classList.remove('show-menu');
    }
})
