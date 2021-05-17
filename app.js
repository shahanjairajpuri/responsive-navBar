const menuIcon = document.querySelector('.hamburger-menu')
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

menuIcon.addEventListener('click',()=>{
    navbar.classList.toggle('change');
    logo.classList.add('show')
    
});