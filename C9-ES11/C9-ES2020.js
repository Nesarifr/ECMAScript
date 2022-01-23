//cree el archivo index.html
//en el body coloque las siguiente etiquetas
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <button id="btn">file</button>
    <script type="module" src="./C9-ES2020.js"></script>
</body>
</html>*/

//creo un archivo llamado "file.js" con el siguiente codigo
/* import function hello() {
    console.log("hola mundo");
}*/ 

// DINAMYC IMPORT , se realiza importaciones de forma dinamica-----------------

const button = document.getElementById("btn"); // constante se llama al Id que estableci "btn"

button.addEventListener("click", async function () { //metodo para escuchar lo que va a pasar en "btn"
    //en este caso lo que va a vigilar es el "click" - creo una funcion anonima con async ya que tengo
    //que esto pase.
    const module= await import("./file.js"); //una constante module que espere para llamar a "file.js"
    module.hello(); //utilizo la funcion dentro de "file.js"
});

//---------------BigNumber---------------
const aBigNumber=9007199254740991n //numero mas grande que se podia usar en Javascript
const anotherBigNumber= BigInt(9007199254740991) //se puede usar este numero sin la "n"

console.log(aBigNumber);
console.log(anotherBigNumber);

//----------------Promise.allSettled-------------

const promise1 = new Promise ((resolve, reject)=>reject("reject")); //super importante la mayuscula Promise
const promise2 = new Promise ((resolve, reject)=>resolve("resolve"));
const promise3 = new Promise ((resolve, reject)=>resolve("resolve1"));

Promise.allSettled([promise1,promise2,promise3]) //espera a q todas esten resueltas 
//a diferencia de promise.all, ya que se cierra cuando se rechacen algunas de las promesas
//promise.allSettled va a correr todas las promesas sin importar su respuesta
.then(response =>console.log(response))
/*[
  { status: 'rejected', reason: 'reject' },
  { status: 'fulfilled', value: 'resolve' },
  { status: 'fulfilled', value: 'resolve1' }
]
 */

// ---------------------- Global this -----------
console.log(globalThis); //tenemos acceso desde Nodejs, para acceder al recurso

//---------------------- Operador null "??"

const fooo= null ?? 'default string'; // ?? crear el operador logico, "si el elemento es nulo", dara 'default string'
console.log(fooo); // default string

//------------------- opcional chaining ch

const user ={}; //objeto vacio
console.log(user?.profile?.email); // ? es para leer hasta este nivel para que no ejecute error
//si no esta el objeto o elemento dara como resultado "undefined" para no romper la aplicacion con error

if(user?.profile?.email){ //si tengo acceso a profile, o user, dara true
    console.log('email')
} else { //como no  tengo acceso o no existe, se dara fail
    console.log('fail')
}
