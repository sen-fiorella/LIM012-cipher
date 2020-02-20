// import { encode } from "punycode";

import cipher from './cipher.js';

// console.log(cipher);

const textIngreso = document.getElementById('textIngreso');
const textResultado = document.getElementById('textResultado');
const buttonCode = document.getElementById('bCode');
const buttonDecode = document.getElementById('bDecode');
let offset = document.getElementById("offset");

buttonCode.addEventListener('click',() => 
  {
    let valueOffset = offset.value;
    let message = textIngreso.value;
    textResultado.value = cipher.encode(message,valueOffset);    
   
  });

//Creando evento al boton Descifrar
buttonDecode.addEventListener('click', () => 
  {
    let valueOffset = offset.value;
    let message = textIngreso.value;
    textResultado.value = cipher.decode(message,valueOffset);    
});


