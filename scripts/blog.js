// Use JavaScript to obtain a reference to the first section with the class of article_header 
const header = document.querySelector(".article__header")

// and change its text with the textContent property to "Welcome to the {insert your name here} blog"
header.textContent = 'Welcome to the Curtis blog';

// Use JavaScript to obtain a reference to all article__header elements 
// when I change.querySelector to.querySelectorAll I get an error for "Uncaught TypeError: Cannot read property 'add' of undefined" need to ask monday

const allHeaders = document.querySelector('.article__header');

// and change their classList property value to article__header important.
allHeaders.classList.add("important");

// Obtain a reference the element with a class of dashed and remove it.
const unDash = document.querySelector('.dashed');
unDash.style.border = "none"

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const footer = document.querySelector('.article__footer');
footer.classList.add('goldenrod')