// ------------------- String.replaceAll ----------

const string ="JavaScript, es maravilloso, con JavaScript puedo creaer el futuro de la web"; //creo un string

//reemplazo una parte
const replacedString = string.replace( "JavaScript", "Python"); // (busca, reemplaza)
console.log(replacedString)
//Python, es maravilloso, con JavaScript puedo creaer el futuro de la web
//string.replace encuentra el primer elemento y lo cambia

// nuevo metodo de reemplazo

const replacedString2 = string.replaceAll( "JavaScript", "Python"); // (busca, reemplaza)
console.log(replacedString2)
//Python, es maravilloso, con Python puedo creaer el futuro de la web
//string.replaceAll cambia todas las palabras encontradas

//---------------------Metodo privados -------------
class Message { //inicializo la clase
    show(val){ //metodo para mostrar un valor
        console.log(val);
    };
}
const message = new Message(); // inicializo una constante con el nuevo metodo
//new es el constructor de las clases 
message.show('hola!') //llamo al metodo 

// para mostrarlo como un metodo privado

class Message {
    #show(val){ //se pone la almohadill "#" para mostrar q es privado
        //el unico acceso al metodo es dentro de la clase
        console.log(val);
    };
}
const message = new Message();  
message.show('hola!') 
// ahora muestra "TypeError: message.show is not a function"

//---------------getter and setter lo mismo
class Message {
    #show(val){ 
        console.log(val);
    };
    get #add(val){
        ...
    }
}
const message = new Message();  
message.show('hola!') 

// --------------------- promise any
// es un objeto global de promise, cuyo argumento va a ser una array de promesas
//va a gestionar y dar la respuesta de la primera q se resuelva de forma satisfactoria

const promise1=new Promise((resolve, reject) => reject ("1"));
const promise2=new Promise((resolve, reject) => resolve ("2"));
const promise3=new Promise((resolve, reject) => resolve ("3"));

Promise.any ([promise1, promise2,promise3]) // genero un arreglo de promesas
.then(response=>console.log(response)) //cuando se responda , mostrar el resultado de la respuesta
//2 el primer valor que retorna, es el q se resuelve primero

//---------------------- referencia de forma debil a un objeto

class AnyClass{
    constructor(element){
    this.ref = new WeakRef(element) //se genera la referencia debil
    } //se hace este llamado para que no sea recogido por la estructura interna
    //para ser borrado
}

// --------------- operadores logicos

// asignacion logica AND
let isTrue=true;
let isFalse=false;
console.log(isTrue &&= isFalse); //false
// asignacion logica OR
let isTrue=true;
let isFalse=false;
console.log(isTrue ||= isFalse); // true
// asignacion logica anulacion
let isTrue=true;
let isFalse=false;
console.log(isTrue ??= isFalse); //true