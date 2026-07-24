// Footer

document.getElementById("currentyear").textContent =
new Date().getFullYear();


document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;



// Hamburger Menu

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector("#navigation");


menuButton.addEventListener("click", function(){

    navigation.classList.toggle("open");


    if(navigation.classList.contains("open")){

        menuButton.textContent = "✖";

    }

    else{

        menuButton.textContent = "☰";

    }

});



// Temple Data


const temples = [


{
name:"Salt Lake Utah Temple",
location:"Salt Lake City, Utah",
dedicated:1893,
area:253000,
image:"images/salt-lake-temple.jpg"
},


{
name:"St. George Utah Temple",
location:"St. George, Utah",
dedicated:1877,
area:110000,
image:"images/st.-george-temple.jpg"
},


{
name:"Logan Utah Temple",
location:"Logan, Utah",
dedicated:1884,
area:119619,
image:"images/logan-temple.jpg"
},


{
name:"Manti Utah Temple",
location:"Manti, Utah",
dedicated:1888,
area:74792,
image:"images/manti-temple.jpg"
},


{
name:"Laie Hawaii Temple",
location:"Laie, Hawaii",
dedicated:1919,
area:42100,
image:"images/laie-temple.jpg"
},


{
name:"Idaho Falls Idaho Temple",
location:"Idaho Falls, Idaho",
dedicated:1945,
area:92600,
image:"images/idaho-falls-temple.jpg"
},


{
name:"Rome Italy Temple",
location:"Rome, Italy",
dedicated:2019,
area:41000,
image:"images/rome-italy-temple.jpg"
},


{
name:"Tokyo Japan Temple",
location:"Tokyo, Japan",
dedicated:1980,
area:52000,
image:"images/tokyo-japan-temple.jpg"
},


{
name:"Paris France Temple",
location:"Paris, France",
dedicated:2017,
area:44000,
image:"images/paris-france-temple.jpg"
}


];




// Display Temples


function displayTemples(list){


const gallery = document.querySelector(".gallery");


gallery.innerHTML = "";



list.forEach(function(temple){


let card = document.createElement("figure");


card.innerHTML = `

<img src="${temple.image}"
alt="${temple.name}"
loading="lazy">


<figcaption>

<h3>${temple.name}</h3>

<p>${temple.location}</p>

<p>Dedicated: ${temple.dedicated}</p>

<p>Area: ${temple.area.toLocaleString()} sq ft</p>

</figcaption>

`;



gallery.appendChild(card);



});


}



displayTemples(temples);





// Filters


document.querySelector("#home")
.addEventListener("click", function(){

displayTemples(temples);

});



document.querySelector("#old")
.addEventListener("click", function(){


displayTemples(

temples.filter(function(temple){

return temple.dedicated < 1900;

})

);


});



document.querySelector("#new")
.addEventListener("click", function(){


displayTemples(

temples.filter(function(temple){

return temple.dedicated > 2000;

})

);


});




document.querySelector("#large")
.addEventListener("click", function(){


displayTemples(

temples.filter(function(temple){

return temple.area > 90000;

})

);


});





document.querySelector("#small")
.addEventListener("click", function(){


displayTemples(

temples.filter(function(temple){

return temple.area < 90000;

})

);


});