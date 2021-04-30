




const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const quoteSize = document.getElementById('heading');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// chagnge font size
const doResize = () => {
    let width = window.innerWidth;
    quoteSize.style.fontSize = `calc(${width} / 20)`;
}
doResize();
