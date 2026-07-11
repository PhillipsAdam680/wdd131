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


const temples = [

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
},

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
},

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
},

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
},

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
},

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
},

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
},

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
},

{
    name:"Salt Lake",
    dedicated:1893,
    size:253000,
    image:"images/salt-lake-temple.jpg"
}



];


function displayTemples(list){

    const gallery = document.querySelector(".gallery");

    gallery.innerHTML = "";

    list.forEach(function(temple){

        const figure = document.createElement("figure");

        figure.innerHTML =

        `<img src="${temple.image}" alt="${temple.name}" loading="lazy">

        <figcaption>

        ${temple.name}

        </figcaption>`;

        gallery.appendChild(figure);

    });

}
displayTemples(temples);



document.getElementById("home").addEventListener("click", function(){

    displayTemples(temples);

});

document.getElementById("old").addEventListener("click", function(){

    const oldTemples = temples.filter(function(temple){

        return temple.dedicated < 1900;

    });

    displayTemples(oldTemples);

});

document.getElementById("new").addEventListener("click", function(){

    const newTemples = temples.filter(function(temple){

        return temple.dedicated > 2000;

    });

    displayTemples(newTemples);

});

document.getElementById("large").addEventListener("click", function(){

    const largeTemples = temples.filter(function(temple){

        return temple.size > 90000;

    });

    displayTemples(largeTemples);

});

document.getElementById("small").addEventListener("click", function(){

    const smallTemples = temples.filter(function(temple){

        return temple.size < 90000;

    });

    displayTemples(smallTemples);

});