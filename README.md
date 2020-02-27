<!-- # Diario personal virtual-->

# My Secret (Cifrado César)

## Índice
 
* [1. Resumen del proyecto](#1-resumen-del-proyecto)
+ [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Investigación UX](#3-investigacion-ux)
* [4. Imagen del primer prototipo en papel](#4-imagen-del-primer-prototipo-en-papel)
* [5. Resumen del primer feedback](#5-resumen-del-primer-feedback)
* [6. Imagen del prototipo final](#6-imagen-del-prototipo-final)
* [7. Hacker edition y aclaraciones del método de cifrado](#7-hacker-edition-y-aclaraciones-del-metodo-cifrado)

***

## 1. Resumen del proyecto

My Secret es una plataformar virtual que permite a los usuarios cifrar y descifrar textos mediante un sistema de encriptado de desplazamiento que es muy fácil de usar. 

## 2. Imagen final del proyecto
![image](https://user-images.githubusercontent.com/60791638/75454549-9672ac80-5943-11ea-861b-fabdaaf802f5.png)


## 3. Investigación UX: Los usuarios y los objetivos en relación con el producto

Antes de consolidar la idea del proyecto se solicitó la opinión de dos personas, género femenino de 23 y 26 años de edad respectivamente, en referencia a la siguiente pregunta: Si tuviera una herramienta de cifrado de texto, ¿para qué uso le darías? Las respuestas proporcionadas respectivamente fueron: 
- Archivar mis anotaciones secretas;
- Contraseñas.

Fue gracias a estas opiniones que decidí que mi proyecto consistiría en la elaboración de una aplicación que permita el cifrado y descifrado de textos que puedan incluir anotaciones personales secretas para el archivo de un diario personal, contraseñas o cualquier uso similar. 

Luego de realizar el segundo prototipo se solicitó feedback a tres personas, dos varones y una mujer entre 19 y 35 años de edad, en relación a la necesidad de confidencialidad de la información y su relación con la tecnología. Los comentarios recibidos fueron los siguientes:
- "Es importante cambiar la contraseña regularmente porque abundan los hackers, solo que a veces olvido mi contraseña y sería genial una aplicación que me ayude a recordarla fácilmente".
- "Usualmente guardo mis anotaciones en el correo electrónico porque tengo miendo a que alguien vaya a leer mis notas personales si lo archivo en la computadora, porque lo comparto con mis hermanas".
- "Ahora no tengo información muy confidencial, pero si lo llegara a tener sin duda lo encriptaría, pero para crear contraseñas creo que sí me sería de utilidad".

Gracias a las opiniones recibidas, se decide crear una aplicación destinada a usuarios entre 18 y 35 años de edad que necesiten encontrar un espacio seguro y privado que proporcione cualidades confidenciales a su información digital dentro de las nuevas tecnologías de almacenamiento de archivos personales. 

Así se creó My Secret, una aplicación con la que el usuario podrá cifrar y descifrar rápidamente textos confidenciales como por ejemplo:
* Diarios personales
* Mensajes o cartas electrónicas

Así también, otros servicios que permite My Secret es la creación de:
* Claves secretas
* Códigos de seguridad


## 4. Imagen del primer prototipo en papel

El primer prototipo en papel que realicé mostraba los espacios destinados para el título de la aplicación, un subtítulo con el concepto básico e intrucciones, el botón de offset, las casillas de texto y los botones de cifrado y descifrado.

![image](https://user-images.githubusercontent.com/60791638/75125304-795b8680-5682-11ea-88f0-be84a92fb7fa.png)


## 5. Resumen del primer feedback

Luego de mostrar el primer prototipo en papel a mis compañeras e indicar la utilidad de la aplicación que pensaba crear para el proyecto, recibí las siguientes sugerencias:
- "El casillero offset no debería ser tan grande".
- "Es necesario un botón que permita borrar la información ingresada". 


## 6. Imagen del prototipo final

![image](https://user-images.githubusercontent.com/60791638/75126648-f4c03680-5688-11ea-9fab-e953c0f3584a.png)


## 7. Hacker edition y aclaraciones del método de cifrado

Para el desarrollo del proyecto se tomó como base principal una de las técnicas criptográfica más usadas: el [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher). Conocida también como cifrado por desplazamiento y sustitución debido a que una letra de un texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto. 

Así también, para los fines del proyecto se consideró conveniente el adicionar el cifrado y descifrado de algunos caracteres no alfabéticos y para ello se tomó como referencia sus ubicaciones en código [ASCII](https://elcodigoascii.com.ar/). 

Finalmente, el algoritmo permite cifrar y descifrar caracteres alfabéticos en mayúsculas y minúsculas; números;algunos caracteres especiales no alfabéticos y el caracter número 32 en el código ASCII que representa el espacio. En caso se intente cifrar algún caracter no incluido, el resultado arrojará el mismo valor.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra amor se cifra como dpru.
* La palabra valentía se cifra como ¡Ydohqwíd$.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* Caracteres no alfabéticos sin cifrar:  ! " # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @
* Caracteres no alfabéticos cifrados:    $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @   ! "

## OBJETIVOS:
Reflexiona y luego marca los objetivos que has llegado a **entender** y
**aplicar** en tu proyecto.
### UX
* [x] [Diseñar la aplicación pensando y entendiendo al usuario](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
* [x] [Crear prototipos para obtener feedback e iterar](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/00-sketching/00-sketching)
* [ ] [Aplicar los principios de diseño visual](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/01-visual-design/01-visual-design-basics)
### HTML y CSS
* [X] [Uso correcto de HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] [Uso de selectores de CSS](https://developer.mozilla.org/es/docs/Web/CSS/Selectores_CSS)
* [x] [Construir tu aplicación respetando el diseño realizado](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/css/01-css/02-boxmodel-and-display) (maquetación).
### DOM
* [x] [Uso de selectores de nodos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/03-1-dom-methods-selection)
* [ ] [Manejo de eventos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/04-events)
* [ ] [Manipulación dinámica del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
### Javascript
* [ ] [Manipulación de strings](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/06-strings/01-strings)
* [ ] [Uso de condicionales](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/01-conditionals-and-loops)
* [ ] [Uso de bucles](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/02-loops)
* [ ] [Uso de funciones](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/javascript/02-flow-control/03-functions)
* [ ] [Datos atómicos y estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [ ] Utilizar ES Modules (`import` | `export`).
### Testing
* [ ] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)
### Git y GitHub
* [x] [Comandos de git](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/01-git/04-commands)
  (`add` | `commit` | `pull` | `status` | `push`).
* [x] [Manejo de repositorios de GitHub](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/02-github/01-github)  (`clone` | `fork` | `gh-pages`).
### Buenas prácticas de desarrollo
* [x] Organizar y dividir el código en módulos (Modularización).
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica).
* [ ] Uso de linter para seguir buenas prácticas (ESLINT).

