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

// Define the source code as a string
const sourceCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Responsive Portfolio Page</title>
</head> <!-- end of head-->

<body>
    <div class="main">
        <!-- Navbar -->
        <div class="navbar">
            <a href="#" class="logo">Marc Jacob Reyes</a>
            <div class="nav-links">
                <span id="scroll" class="item selected">Home</span>
                <span  id="scroll02" class="item">Relevant Coursework</span>
                <span id="scroll03" class="item">Values</span>
            </div>
            <div class="nav-buttons" id="navMenu">
                <button id="projects-btn" class="nav-btn selected">PROJECTS</button>
                <button id="contact-btn" class="nav-btn">CONTACT ME</button>
            </div>
            <button class="toggler">
                <i class='bx bx-menu'></i>
            </button>
        </div> <!-- End of Navbar -->

        <!-- Top Container-->
        <div class="top-container">
            <div class="info-box">
                <p class="header">
                    University of Texas at San Antonio graduate with a Bachelor in Computer
                    Information Systems, possessing a strong
                    background in Cloud Computing, IT,
                    Systems Analysis/Design, and Software
                    Development. Seeking a software
                    developer opportunity in a technology focused company where I can contribute to the
                    success of the organization.
                </p>
                <p class="info-text">
                    AWS Certified Cloud Practitioner
                </p>
                <div class="info-buttons">
                    <button id="exploreCode-btn" class="info-btn selected">Explore Code</button>
                    <button id="exlploreDiagrams-btn" class="info-btn nav-btn">Explore Diagrams </button>
                    <button id="exploreResume-btn" class="info-btn nav-btn">Explore Resume</button>
                </div>
            </div> <!-- end of info-box div -->
            <div class="img-box">
                <img src="v226-ning-40-religion-a-job101.jpg" class="img-pic">
                <div class="img-content">
                    <div class="info">
                        <img src="pieceOf8CoinTransparent.png" class="info-img">
                        <div>
                            <div class="likes">
                                <div class="icon-box">
                                    <i class='bx bxl-github'></i>
                                    <p>github.com/marcjacobreyes</p>
                                </div>
                                <div class="icon-linkedin">
                                    <i class='bx bxl-linkedin-square'></i>
                                    <p>linkedin.com/in/marcjacobreyes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End of top container-->

        <div class="coursework">
            <p class="header03">RELEVANT COURSEWORK</p>
            <p class="info-text03">These are the relevant courses I took while at UTSA</p>
            <div class="items-box03">
                <div class="item-container03">
                    <div class="item03">
                        <i class="bx bx-network-chart"></i>
                    </div>
                    <p>Systems Analysis & Design</p>
                </div>
                <div class="item-container03">
                    <div class="item03">
                        <i class='bx bx-cloud'></i>
                    </div>
                    <p>Cloud Computing</p>
                </div>
                <div class="item-container03">
                    <div class="item03">
                        <i class='bx bxs-data'></i>
                    </div>
                    <p>Database Management</p>
                </div>
                <div class="item-container03">
                    <div class="item03">
                        <i class='bx bx-devices'></i>
                    </div>
                    <p>Application Development</p>
                </div>
                <div class="item-container03">
                    <div class="item03">
                        <i class='bx bx-objects-vertical-center'></i>
                    </div>
                    <p>Object Oriented Programming</p>
                </div>
                <div class="item-container03">
                    <div class="item03">
                        <i class='bx bx-shield-quarter'></i>
                    </div>
                    <p>Operating Systems Security</p>
                </div>
                <div class="item-container03">
                    <div class="item03">
                        <i class='bx bx-book-reader'></i>
                    </div>
                    <p>Essentials of Technology Management</p>
                </div>
                <div class="item-container03">
                    <div class="item03">
                        <i class='bx bx-desktop'></i>
                    </div>
                    <p>Advanced Topics in Information Systems</p>
                </div>
            </div>
        </div>

        <!-- Get Started-->
        <div class="get-started">
            <p class="header">VALUES</p>
            <p class="info-text">Designing, Developing, Testing, and Maintaining Software Solutions</p>
            <div class="items-box">
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-check-shield'></i>
                    </div>
                    <p>Secure Data</p>
                </div>
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-universal-access'></i>
                    </div>
                    <p>Problems Made Easy</p>
                </div>
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-money'></i>
                    </div>
                    <p>Low Cost Web Solutions</p>
                </div>
                <div class="item-container">
                    <div class="item">
                        <i class='bx bx-rocket'></i>
                    </div>
                    <p>Lightning Quick & Scalable</p>
                </div>
            </div>
        </div> <!-- end of get started -->

        <!-- Projects -->
        <div class="projects">
            <p class="header02">RELEVANT PROJECTS</p>
            <p class="info-text02">Here are some solutions I have developed over the passed few years</p>
            <div class="items-box02">
                <div class="item-container02">
                    <div class="item02">
                        <img src="biweeklyTimeSheetCalcSnippet01.png" class="item02-img">
                    </div>
                    <p class = "item-text02">Biweekly Time Sheet Calculator</p>
                </div>
                <div class="item-container02">
                    <div class="item02">
                        <img src="internetSpeedTestSnippet01.png" class="item02-img">
                    </div>
                    <p class = "item-text02">Internet Speed Test</p>
                </div>
                <div class="item-container02">
                    <div class="item02">
                        <img src="qrCodeGenerator.png" class="item02-img">
                    </div>
                    <p class = "item-text02">QR Code Generator</p>
                </div>
                <div class="item-container02">
                    <div class="item02">
                        <img src="loginPageSnippet01.png" class="item02-img">
                    </div>
                    <p class = "item-text02">Login Landing Page</p>
                </div>
            </div>
        </div> <!-- end of projects -->

        <!-- Footer -->
        <div class="footer">
            <div class="footer-header">
                <h1>Marc Jacob Reyes</h1>
                <p>Software Developer</p>
            </div>
            <div class="footer-links">
                <div class="link">
                    <h5>Contact</h5>
                    <p>Github - github.com/marcjacobreyes</p>
                    <p>LinkedIn - linkedin.com/in/marcjacobreyes</p>
                </div>
            </div>
        </div>
        <!-- End of Footer -->

        <div class="copyright">
            <p>Copyright 2023, Marc Jacob Reyes.</p>
        </div>

        <div id="source-code-container">
            <pre id="source-code"></pre>
        </div>

    </div> <!-- End of main -->
    
    <script src="index.js"></script>
</body><!-- end of body -->
</html>
`;

// Add click event listener to the button
exploreCodeBtn.addEventListener("click", function () {
  // Get the source code container and the source code element
  const sourceCodeContainer = document.getElementById("source-code-container");
  const sourceCodeElement = document.getElementById("source-code");

  // Set the source code as the content of the source code element
  sourceCodeElement.textContent = sourceCode;

  // Show the source code container
  sourceCodeContainer.style.display = "block";
});

function goBack() { 
    window.history.back();
} // end of goBack function

