const listConsole_1 = document.querySelectorAll('li');
const listConsole_2 = document.getElementById('list');

console.log("Sposib #1");

console.log(listConsole_1[0].textContent);
console.log(listConsole_1[4].textContent);
console.log(listConsole_1[1].textContent);
console.log(listConsole_1[3].textContent);
console.log(listConsole_1[2].textContent);

console.log("Sposib #2");

console.log(listConsole_2.children[0].outerText);
console.log(listConsole_2.children[4].outerText);
console.log(listConsole_2.children[1].outerText);
console.log(listConsole_2.children[3].outerText);
console.log(listConsole_2.children[2].outerText);