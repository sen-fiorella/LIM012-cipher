const cipher = {
  encode: (message,valueOffset) => {
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
      } else if(codeAscii >=32 && codeAscii<=64) {
        let cifradoNumCar = (codeAscii-32+parseInt(valueOffset))%33+32;
        textResultado.value += String.fromCharCode(cifradoNumCar);
      }    
  }
  return textResultado.value
},

  decode: (message,valueOffset) => {

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
      let descifradoMinus = (codeAscii-122-parseInt(valueOffset))%26+122;
      textResultado.value += String.fromCharCode(descifradoMinus);
      }
      else if (codeAscii >= 32 && codeAscii <=64) {
      let descifradoNumCar = (codeAscii-64-parseInt(valueOffset))%33+64;
      textResultado.value += String.fromCharCode(descifradoNumCar);
    }
    
  }

  return textResultado.value
 }

};

export default cipher;
