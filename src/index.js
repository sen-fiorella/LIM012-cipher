//import cipher from './cipher.js';

//console.log(cipher);

//Variables
const textIngreso = document.getElementById('textIngreso');
const textResultado = document.getElementById('textResultado');
const buttonCode = document.getElementById('bCode');
const buttonDecode = document.getElementById('bDecode');
let offset = document.getElementById("offset");


//Creando evento al boton Cifrar
buttonCode.addEventListener('click',() => 
  {
    let valueOffset = offset.value;
    let message = textIngreso.value;
    
    //for
    for (let i = 0; i < message.length; i++) {
      //Traigo la posición ascii de la letra ingresada en message - Coloco 0 para indicar la posición inicial del string, aquí aplicar for
    let codeAscii= message.charCodeAt(i);
    //Aplico la fórmula de Cifrado César para el desplazamiento
    let cifrado = (codeAscii-65+parseInt(valueOffset))%26+65;
    textResultado.value += String.fromCharCode(cifrado);
    }

    

    
   
  });

//Creando evento al boton Descifrar
buttonDecode.addEventListener('click', () => 
  {
    let valueOffset = offset.value;
    let message = textIngreso.value;

  //For
  for (let i = 0; i < message.length; i++) {
    //Traigo la posición ascii de la letra ingresada en message - Coloco 0 para indicar la posición inicial del string, aquí aplicar for
  let codeAscii= message.charCodeAt(i);
  let textDescifrado = textResultado.value;
  //Aplico la fórmula de Cifrado César para el desplazamiento
  let descifrado = (codeAscii+65-parseInt(valueOffset))%26+65;
  textResultado.value += String.fromCharCode(descifrado);

    
  }


});


