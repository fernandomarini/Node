
                        // *** RETO 1 ****
/* 
console.log(" Mensaje 1 ");

setTimeout( function(){
    console.log( " Mensaje 2 ");
    console.log( " Mensaje 3 ");

}, 3000);
 */

                        // *** RETO 2 *** 
/* 
• Crea un objeto con las siguientes propiedades: name, surname, age.
• Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
objeto e imprimelo por consola.
• Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
ejecutar el archivo de nuevo */
/* 
const fs = require('fs');

let persona = { "name": "Fernando" , 
                "surname": "Marini", 
                "age": 43 };


let data = JSON.stringify(persona, null,1);

fs.writeFile('persona_01.JSON', data , (err)=>{
  if (err)  throw err;
    console.log(`Error: ${err} `);
});

fs.readFile('persona_01.JSON', (err, data)=> {
  if (err) throw err;
  let person = JSON.parse(data);
  console.log(person);
}); */

                          // *** RETO 3 *** 
/* 
• Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
módulo readline de node y solicita los valores del name, surname y age a través de la consola.
• Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
readline.
• Este ejercicio debe hacerse en una única ejecución de JavaScript
*/

const fs = require('fs');
const readline = require('readline');

let persona = { "name": "", 
                "surname": "",
                "age": 0 }


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un nombre:', (nombre)=>{ 
  rl.question('Ingrese apelido :', (apellido)=>{ 
    rl.question('Ingrese edad :', (edad)=>{ 
                persona.name = nombre;
                persona.surname = apellido;
                persona.age = edad;
                  let data = JSON.stringify(persona, null,1);
                fs.writeFile('persona_02.JSON', data , (err)=>{
                            if (err)  throw err;
                            console.log(`Error: ${err} `);
                      fs.readFile('persona_02.JSON', (err, data)=> {
                                  if (err) throw err;
                                  let person = JSON.parse(data);
                                  console.log(person);   
                          rl.close();                             
                });
            });
        }); 
    });
});

                    




