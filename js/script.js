const outputTag = document.getElementById('output');

const name = prompt('Inserire il nome');
const lastname = prompt('Inserire il cognome');
const color = prompt('Inserire il colore preferito');
const message = name + lastname + color + 23;



outputTag.innerHTML = message;