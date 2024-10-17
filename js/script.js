//Toggle class avtive
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#Hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

//Klik di luar sidebar
const menu = document.querySelector('#Hamburger-menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});