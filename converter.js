
const convertBtn = document.getElementById('convert-btn');
let inputValue = document.getElementById('number-input');








//Add click event listener to convert btn
convertBtn.addEventListener('click', convertUnits)

//Create a function that logs button clicked for the convert btn
function convertUnits() {

  convertLength();
  convertVolume();
  convertMass()

}

// Coversions 
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convertLength () {

const lengthP = document.getElementById('length-p')
let oneFootToMeter = inputValue.value * .3048;
let oneMeterToFoot = inputValue.value * 3.281;
lengthP.textContent = `${inputValue.value} meters = ${oneMeterToFoot.toFixed(3)} feet | ${inputValue.value} feet = ${oneFootToMeter.toFixed(3)} meters`

}


function convertVolume () {

const volumeP = document.getElementById('volume-p')
let oneLiterToGallon = inputValue.value * 0.264;
let oneGallonToLiter = inputValue.value * 3.785;
volumeP.textContent = `${inputValue.value} liters = ${oneLiterToGallon.toFixed(3)} gallons | ${inputValue.value} gallons = ${oneGallonToLiter.toFixed(3)} liters`

}

function convertMass () {

const massP = document.getElementById('mass-p')
let oneKilogramToPound = inputValue.value * 2.204;
let onePoundToKilogram = inputValue.value * .453;
massP.textContent = `${inputValue.value} kilograms = ${oneKilogramToPound.toFixed(3)} pounds | ${inputValue.value} pounds = ${onePoundToKilogram.toFixed(3)} kilograms`

}
