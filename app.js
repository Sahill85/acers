// js for hamburger
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-250px";
}

// js for sahil's portfolio button 
document.getElementById('sahil').addEventListener('click', function() {
    window.location.href = 'https://sahill85.github.io/PortFolio/';
}); 