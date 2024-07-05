const burgerNav = document.getElementById('burger-nav');
const burgerMenu = document.getElementById('burger-menu');

burgerNav.style.display = 'none';
burgerMenu.addEventListener('click', function () {
    if (burgerNav.style.display === 'none') {
        burgerNav.style.display = 'flex';
    } else {
        burgerNav.style.display = 'none';
    }
})