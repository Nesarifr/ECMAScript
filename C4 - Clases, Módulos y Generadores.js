//<---------------------clases ------------------->
class Calculator { //asigno el nombre Calculator // los clases no siguen el Hoisting // se debe iniciar siempre con mayuscula
    constructor(){ //asignamos un constructor en el bloque de codigo, es la manera de declarar una clase
        this.valueA = 0; //asignamos las variables que van a estar -->
        this.valueB= 0; //DISPONIBLES EN UN Scope global
    }
    sum(valueA,valueB){ // genero este metodo para sumar
        this.valueA = valueA; //valores usados dentro de mi metodo, seran igualados a los valores recibidos
        this.valueB = valueB;
        return this.valueA + this.valueB //retorno la suma
    }
}
//como la llamo??
const calc=new Calculator(); //genero una constante, sera igual a la clase q acabo de crear
//las clases se inicializan con new
console.log(calc.sum(2,2)); //uso calc con el metodo y poniendo sus valores

//<---------------------IMPORTAR MODULOS ------------------->

/* genero un arhivo "module.js"
const hello = () => {
    return 'hello!'
}
export default hello;
*/

import { hello } from './module';
hello();

/* ------------node ahora usa la siguiente notacion--------- */
/* en la EXPORTACION
const hello = () => {
    return 'hello!'
}
module.exports=hello; <----- PARA EXPORTAR
*/

const hello=require("./module.js");
console.log(hello(true)); //asi funciona en node IMPORTACION

// <--------------------- GENERATOR -------------------->
// es una funcion especial la cual retorna  una serie de valores segun el algoritmo definidos

function* helloWorld(){  //sintaxis * //
    if(true){ //segun el algortimo es como va a retornar los valores
        yield 'hello, '; //yield guarda este estado de forma interna
    } if (true){ //puedo generar otro if
        yield 'world' ;
    }
};

const generatorHello= helloWorld(); // se ejecuta con una constante
console.log(generatorHello.next().value); // el valor next me permite ejecutar la primer logica (guarda q se ejecuto)
console.log(generatorHello.next().value); // el valor next me permite ejecutar la segunda logica (guarda q se ejecuto)
console.log(generatorHello.next().value); // y asi por cada step