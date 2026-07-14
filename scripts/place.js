// Current Year
document.getElementById("currentyear").textContent =
new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;

// Temperature and Wind Speed
const temperature = 8;
const windSpeed = 12;

// Wind Chill Function
function calculateWindChill(temp, wind){

    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind,0.16) +
        0.3965 * temp * Math.pow(wind,0.16)
    ).toFixed(1);

}

// Display Wind Chill
if(temperature <= 10 && windSpeed > 4.8){

    document.getElementById("windChill").textContent =
    calculateWindChill(temperature, windSpeed) + " °C";

}
else{

    document.getElementById("windChill").textContent = "N/A";

}