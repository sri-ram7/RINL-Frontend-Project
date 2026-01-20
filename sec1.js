function togglemenu() {
    const links = document.getElementById("navlinks");
    links.classList.toggle("active");
    console.log("toggled")
}

function showWhiteBox() {
    const box = document.querySelector('.white-box');
    box.classList.toggle('show');
}