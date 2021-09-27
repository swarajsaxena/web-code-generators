// Getting Elements

const mobileNavbar = document.getElementById('mobile-navbar')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    if( hamburger.classList.contains('menu-open') ){
        mobileNavbar.classList.remove('navbar-open')
        hamburger.classList.remove('menu-open')
    }
    else{
        mobileNavbar.classList.add('navbar-open')
        hamburger.classList.add('menu-open')
    }
})