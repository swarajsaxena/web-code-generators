// Getting Elements

const mobileNavbar = document.getElementById('mobile-navbar')
const hamburger = document.getElementById('hamburger')
const menuOpen = document.getElementById('menu-open')
console.log(menuOpen);

hamburger.addEventListener('click', () => {
    mobileNavbar.classList.add('navbar-open')
})

menuOpen.addEventListener('click', () => {
    mobileNavbar.classList.remove('navbar-open')
})