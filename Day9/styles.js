var menu = document.getElementById('mobile-container')
var open = document.getElementById('open-mobile')
var close = document.getElementById('close-mobile')

function openMenu() {
    menu.className = 'mobile-container open';
}

function closeMenu() {
    menu.className = 'mobile-container';
}


open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
