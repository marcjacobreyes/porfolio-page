const toggler = document.querySelector('.toggler');
const navMenu = document.querySelector('#nav-menu');
const projectsBtn = document.querySelector('#projects-btn');
const contactBtn = document.querySelector('#contact-btn'); // Select the "Contact Me" button


toggler.addEventListener('click', function () {

});

const scroll = document.getElementById("scroll");
const scroll02 = document.getElementById("scroll02");
const projectsSection = document.querySelector(".projects");
const profileCard = document.querySelector(".img-box"); // Select the profile card section

scroll02.addEventListener('click', () => {
    document.querySelector(".coursework").scrollIntoView({ behavior: 'smooth' });
})

scroll.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
});

projectsBtn.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the projects section
});

// contactBtn.addEventListener('click', () => {
//     profileCard.scrollIntoView({ behavior: 'smooth' }); // Scroll to the profile card section
//     profileCard.classList.add("zoomed-in"); // Add the "zoomed-in" class to the profile card section
// });