
class Calculator { //asigno el nombre Calculator // los clases no siguen el Hoisting // se debe iniciar siempre con mayuscula
    constructor(){ //asignamos un constructor en el bloque de codigo, es la manera de declarar una clase
        this.valueA = 0; //asignamos las variables que van a estar 
        this.valueB= 0; //dentro mi Scope global (local de la clase)

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


/* genero un arhivo "module.js"
const hello = () =>{
    return 'hello!'
} */

import {hello} from './module.js
hello();