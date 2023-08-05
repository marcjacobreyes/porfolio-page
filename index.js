/**
 * Functionality Overview:
 *
 * - Smooth Scroll: Click events are set up for scroll buttons to smoothly scroll to specific sections of the page.
 *
 * - Section Navigation: Buttons are configured to scroll to designated sections when clicked.
 *   The "Contact Me" button also adds a class to zoom in on the profile card section.
 *
 * - Code Exploration: The "Explore Code" button opens multiple code files (JavaScript, HTML, CSS) in new tabs for exploration.
 *
 * - Resume Preview: The "Explore Resume" button opens the resume "MJRResumeFrontEnd.pdf" in a new tab.
 *
 * - Browser Navigation: The `goBack` function simulates the browser back button's functionality.
 *
 * - Scroll to Top: The `scrollToTop` function scrolls the page to the top when invoked.
 */


//Select the toggler
const toggler = document.querySelector('.toggler');
 // Select the nav-menu
const navMenu = document.querySelector('#nav-menu');
// Select the "Projects" button
const projectsBtn = document.querySelector('#projects-btn');
// Select the "Contact Me" button 
const contactBtn = document.querySelector('#contact-btn'); 

// Select the scroll button
const scroll = document.getElementById("scroll");
// Select the scroll02 button
const scroll02 = document.getElementById("scroll02");
// Select the scroll03 button
const scroll03 = document.getElementById("scroll03");

// Get the "Explore Code" button
const exploreCodeBtn = document.getElementById("exploreCode-btn");
// Get the "Explore Diagrams" button
const exploreDiagramsBtn = document.getElementById("exploreDiagrams-btn");
// Get the "Explore Resume" button
const exploreResumeBtn = document.getElementById("exploreResume-btn");


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


// Add click event listener to the explore code button
exploreCodeBtn.addEventListener("click", function () {
    const files = [
        { name: 'JavaScript', path: 'index.js' },
        { name: 'HTML', path: 'index.html' },
        { name: 'CSS', path: 'style.css' }
      ];
    
      // Function to open each file in a new tab
      function openFileInTab(index) {
        if (index >= files.length) {
          return; // Exit when all files have been processed
        }
    
        const file = files[index];
    
        // Fetch the contents of the file
        fetch(file.path)
          .then(response => response.text())
          .then(code => {
            // Open a new tab and display the code
            const codeTab = window.open();
            codeTab.document.write(`<pre><strong>${file.name}:</strong>\n${code}</pre>`);
    
            // Move to the next file recursively
            openFileInTab(index + 1);
          });
      }
    
      // Start opening files in new tabs
      openFileInTab(0);
});

// Add click event listener to the explore resume button
exploreResumeBtn.addEventListener("click", function () {
    //Open the resume in a new tab
    window.open("Resume0805.pdf", "_blank");
});

function goBack() { 
    window.history.back();
} // end of goBack function


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
