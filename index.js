const toggler = document.querySelector('.toggler'); // Select the toggler
const navMenu = document.querySelector('#nav-menu'); // Select the nav-menu
const projectsBtn = document.querySelector('#projects-btn'); // Select the "Projects" button 
const contactBtn = document.querySelector('#contact-btn'); // Select the "Contact Me" button

toggler.addEventListener('click', function () {

});

const scroll = document.getElementById("scroll"); // Select the scroll button
const scroll02 = document.getElementById("scroll02");  // Select the scroll02 button
const scroll03 = document.getElementById("scroll03"); // Select the scroll03 button

const projectsSection = document.querySelector(".projects"); // select the projects section
const profileCard = document.querySelector(".img-box"); // Select the profile card section

scroll.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
}); // end of scroll event listener leads to home

scroll02.addEventListener('click', () => {
    document.querySelector(".coursework").scrollIntoView({ behavior: 'smooth' });
}) // end of scroll 02 event listener leads to coursework

scroll03.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
}); // end of scroll03 event listener leads to coursework

projectsBtn.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the projects section
}); // end of projectsBtn event listener leads to projects

contactBtn.addEventListener('click', () => {
    profileCard.scrollIntoView({ behavior: 'smooth' }); // Scroll to the profile card section
    profileCard.classList.add("zoomed-in"); // Add the "zoomed-in" class to the profile card section
}); // end of contactBtn event listener leads to contact card

function goBack() { 
    window.history.back();
} // end of goBack function