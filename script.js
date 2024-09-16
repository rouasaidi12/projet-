// Make the navigation sticky
window.onscroll = function() { makeSticky() };

var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function makeSticky() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
} // Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); // Make the navigation sticky
window.onscroll = function() { makeSticky() };

var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function makeSticky() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
}