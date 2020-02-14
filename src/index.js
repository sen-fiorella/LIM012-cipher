//import cipher from './cipher.js';

//console.log(cipher);

//Variables
const textIngreso = document.getElementById('textIngreso');
const textResultado = document.getElementById('textResultado');
const buttonCode = document.getElementById('bCode');
const buttonDecode = document.getElementById('bDecode');
let offset = document.getElementById("offset");


//Creando evento al boton Cifrar
buttonCode.addEventListener('click',() => {

    
    let valueOffset = offset.value;
    let message = textIngreso.value;
    
    //Traigo la posición ascii de la letra ingresada en message - Coloco 0 para indicar la posición inicial del string, aquí aplicar for
    let codeAscii= message.charCodeAt(0);
    //Aplico la fórmula de Cifrado César para el desplazamiento
    let cifrado = (codeAscii-65+parseInt(valueOffset))%26+65;
    textResultado.value = String.fromCharCode(cifrado);


    
      
    
    //formula
   
    // let alphabet = "ABCD";
    // let letterA = alphabet.charCodeAt(0);
    // let letterB = alphabet.charCodeAt(1);



    // console.log(letterA);
    // let numberDisplace = (letterA - 65 + valueOffset)%26;
    // console.log(numberDisplace);

    // textResultado.value = numberDisplace;








  });


