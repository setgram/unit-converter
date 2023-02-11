/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnEl = document.getElementById("btn-el");
let inputEl = document.getElementById("input-el");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");
let feet;
let gallon;
let pound;

btnEl.addEventListener("click", function () {
  feet = inputEl.value * 3.281;
  gallon = inputEl.value * 0.264;
  pound = inputEl.value * 2.204;

  lengthEl.textContent = `
    ${inputEl.value} meters = ${feet.toFixed(2)} feet | ${
    inputEl.value
  } feet = ${(inputEl.value / 3.281).toFixed(2)} meters 
    `;
  volumeEl.textContent = `
    Volume (Liters/Gallons)
    ${inputEl.value} liters = ${gallon.toFixed(2)} gallons | ${
    inputEl.value
  } gallons = ${(inputEl.value / 0.264).toFixed(2)} liters 
    `;
  massEl.textContent = `
    Mass (Kilograms/Pounds)
    ${inputEl.value} kilos = ${pound.toFixed(2)} pounds | ${
    inputEl.value
  } pounds = ${(inputEl.value / 2.204).toFixed(2)} kilos
    `;
});
