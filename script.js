// Function to reveal only one HTML section at a time. Initiated on clicking on specific navbar element in index.html

const showSection = (sectionId) => {
    const sections = document.querySelectorAll('section'); //selects all sections in index.html
    sections.forEach((section) => {
        section.classList.add('hidden'); //adds the hidden class to each section element
    });

    let targetSection = document.getElementById(sectionId); //gets elelemnt ID for the targetted section
    targetSection.classList.remove('hidden'); //removes the hidden class from the section so it can be displayed
};