// Footer

document.getElementById("currentyear").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;


const menuButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function(){

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
    menuButton.textContent = "x";
    } else {
        menuButton.textContent = "☰";
    }

});


