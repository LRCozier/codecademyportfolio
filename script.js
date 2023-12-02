// make only one section visible at a time
document.addEventListener('DOMContentLoaded', () => {
    const sitesections = document.querySelector('.sections section') // get all sections on site
});

//add a click event listener for each section on site
section.forEach(section => {
    section.addEventListener('click'), () => {
        // remove the active class from the current section
        section.forEach(s => section.ClassList.remove('activesection'));

        //assign the active class to the new, selected section
        section.ClassList.add('activesection');
    };
    
});