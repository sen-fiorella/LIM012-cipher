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
    if(codeAscii >= 65 && codeAscii <= 90) {
      //Aplico la fórmula de Cifrado César para el desplazamiento
      let cifradoMayus = (codeAscii-65+parseInt(valueOffset))%26+65;
      textResultado.value += String.fromCharCode(cifradoMayus);

      } else if(codeAscii >= 97 && codeAscii <= 122) {
        //Aplico la fórmula de Cifrado César para el desplazamiento
        let cifradoMinus = (codeAscii-97+parseInt(valueOffset))%26+97;
        textResultado.value += String.fromCharCode(cifradoMinus);
      } else if(codeAscii === 32)
      
      {
      textResultado.value += ' ';
      }
      
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
    if (codeAscii >= 65 && codeAscii <= 90) {
      // let textDescifrado = textResultado.value; (comentado para probar, luego sacar)
      //Aplico la fórmula de Cifrado César para el desplazamiento
      let descifradoMayus = (codeAscii-90-parseInt(valueOffset))%26+90;
      textResultado.value += String.fromCharCode(descifradoMayus);
      }
      else if(codeAscii >= 97 && codeAscii <= 122) {
      //Aplico la fórmula de Cifrado César para el desplazamiento
      let cifradoMinus = (codeAscii-122-parseInt(valueOffset))%26+122;
      textResultado.value += String.fromCharCode(cifradoMinus);
      }
      else if (codeAscii === 32)
    {
      textResultado.value += ' ';
    }
    
  }
  
  });


