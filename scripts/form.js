const products = [

{
id: "fc-1888",
name: "Flux Capacitor"
},

{
id: "fc-2050",
name: "Power Lifter"
},

{
id: "fs-1987",
name: "Solar Charger"
},

{
id: "ac-2000",
name: "AI Assistant"
},

{
id: "pl-3000",
name: "Portable Laptop Stand"
}

];

const select = document.querySelector("#product");

products.forEach(product => {

const option = document.createElement("option");

option.value = product.name;
option.textContent = product.name;

select.appendChild(option);

});

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;