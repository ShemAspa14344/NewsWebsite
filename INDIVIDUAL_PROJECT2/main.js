// const togglebutton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// togglebutton.addEventListener('click' ,() =>{
//     console.log("hello shempot")
// navbarLinks.classList.toggle('active')
// })
document.addEventListener('DOMContentLoaded', () => {
    const togglebutton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    togglebutton.addEventListener('click', () => {
        console.log("Hello shempot");
        navbarLinks.classList.toggle('active');
    });
});
