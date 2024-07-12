
let headerByTagName = document.getElementsByTagName('header')[0];
console.log('Usando getElementsByTagName:', headerByTagName);

document.querySelector('header').id = 'headerID';

let headerById = document.getElementById('headerID');
console.log('Usando getElementById:', headerById);

let headerByQuerySelector = document.querySelector('header');
console.log('Usando querySelector:', headerByQuerySelector);
