const burgerButton=document.getElementById('plain-burger');
const dropDown = document.querySelector('.drop-menu');
const menuExit = document.getElementById('menu-exit-button');
burgerButton.addEventListener('click', function () {
    dropDown.style.display = 'block';
   
});

menuExit.addEventListener('click', function () {
    dropDown.style.display = 'none';
    
});