const cipher = {
  encode: (valueOffset,message) => {
    let mCifrado = '';
    if(valueOffset == null || valueOffset == 0){
      throw new TypeError();
    }
    for (let i = 0; i < message.length; i++) {
      //Traigo la posición ascii de la letra ingresada en message - Coloco 0 panpra indicar la posición inicial del string, aquí aplicar for
    let codeAscii= message.charCodeAt(i);
    if(codeAscii >= 65 && codeAscii <= 90) {
      //Aplico la fórmula de Cifrado César para el desplazamiento
      let cifradoMayus = (codeAscii-65+parseInt(valueOffset))%26+65;
      mCifrado += String.fromCharCode(cifradoMayus);
      } else if(codeAscii >= 97 && codeAscii <= 122) {
        //Aplico la fórmula de Cifrado César para el desplazamiento
        let cifradoMinus = (codeAscii-97+parseInt(valueOffset))%26+97;
        mCifrado += String.fromCharCode(cifradoMinus);
      } else if(codeAscii >=32 && codeAscii<=64) {
        let cifradoNumCar = (codeAscii-32+parseInt(valueOffset))%33+32;
        mCifrado += String.fromCharCode(cifradoNumCar);
      } else {
        mCifrado += message[i];
      }
  }
  return mCifrado
},
  decode: (valueOffset,message) => {
    let mDescifrado ='';
    if(valueOffset == null || valueOffset == 0){
      throw new TypeError();
    }
    for (let i = 0; i < message.length; i++) {
    let codeAscii= message.charCodeAt(i);
    if (codeAscii >= 65 && codeAscii <= 90) {
      let descifradoMayus = (codeAscii-90-parseInt(valueOffset))%26+90;
      mDescifrado += String.fromCharCode(descifradoMayus);
      } else if(codeAscii >= 97 && codeAscii <= 122) {
      let descifradoMinus = (codeAscii-122-parseInt(valueOffset))%26+122;
      mDescifrado += String.fromCharCode(descifradoMinus);
      } else if (codeAscii >= 32 && codeAscii <=64) {
      let descifradoNumCar = (codeAscii-64-parseInt(valueOffset))%33+64;
      mDescifrado += String.fromCharCode(descifradoNumCar);
      } else {
        mDescifrado += message[i];
      }
   }

  return mDescifrado
 }
};
export default cipher;
