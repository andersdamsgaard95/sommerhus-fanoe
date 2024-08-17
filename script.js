
//BURGER MENU
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

//FOLD HUS BESKRIVELSE UD
const gemtOmText = document.getElementsByClassName('gemt-text');
const visMereKnap = document.getElementsByClassName('vis-om-text-knap');
const visMereKnapP = document.getElementsByClassName('vis-mere-eller-mindre');
const dropDownPil = document.getElementsByClassName('drop-down-pil');
const sløretText = document.getElementsByClassName('sløret-text');

    for (let i = 0; i < visMereKnap.length; i++) {
        visMereKnap[i].addEventListener('click', function () {
            if (!gemtOmText[i].classList.contains('show')) {
                gemtOmText[i].classList.add('show');
                visMereKnapP[i].innerHTML = 'Vis mindre';
                dropDownPil[i].style.transform = 'rotate(180deg)';
                sløretText[i].style.opacity = '100%';
            } else {
                gemtOmText[i].classList.remove('show');
                visMereKnapP[i].innerHTML = 'Læs fuld beskrivelse';
                dropDownPil[i].style.transform = '';
                sløretText[i].style.opacity = '';
            }
    })
}

//VIS KORT KNAP
const visKort = document.getElementsByClassName('vis-kort');
const googleMap = document.getElementById('google-map');

googleMap.style.display = 'none';

Array.from(visKort).forEach(function (visKort) {
    visKort.addEventListener('click', function () {
        if (googleMap.style.display === "none") {
            googleMap.style.display = 'block';
        } else {
            googleMap.style.display = 'none';
        }
    })
})

//LUK KORT KNAP 
const lukKort = document.getElementById('luk-kort');

lukKort.addEventListener('click', function () {
    googleMap.style.display = 'none';
})

document.addEventListener('click', function (event) {
    const isClickInside = googleMap.contains(event.target);
    let isClickInsideVisKort = false;

    Array.from(visKort).forEach(function (visKort) {
        if (visKort.contains(event.target)) {
            isClickInsideVisKort = true;
        }
    })

    if (!isClickInside && !isClickInsideVisKort) {
        googleMap.style.display = 'none';
    }
})