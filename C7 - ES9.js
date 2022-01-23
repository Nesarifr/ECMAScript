//spread operator (operador de reposo)
//este puede extrar las propiedades de un objeto el cual no se ha construido
//ejemplo:

const obj = {
    name: 'Nestor',
    age: 32,
    country: 'Arg',
};

let {name, ...all} = obj; //de esta forma, extraigo el elemento name y encapzulo todo lo demas
console.log(name, all); // Nestor { age: 32, country: 'Arg' }

let {country, ...all} = obj; //otra manera es seleccionar el elemento que no me interesa "country"
console.log(all); //{ name: 'Nestor', age: 32 } imprimo por consola el resto

let console.log(obj) //no se modifica el objeto "obj" sigue estando toda la informacion
//sin necesidad de destructurar el objeto


// propiedades de propagacion (para unir objetos)
//ejemplo
const obj ={ //creo un objeto random
    age: 32,
    name: 'Nestor',
}
const obj1={
    ...obj, //une mi nuevo elemento al objeto "objt"
    country : 'Arg', //agrego un nuevo elemento
}
console.log(obj1) // { age: 32, name: 'Nestor', country: 'Arg' }


//Otra caracteristica del ES9 Promise.finally 
//esta caracterista nos permite saber si se ejecuto la respuesta de la promesa 

const helloWorld = () => { // declaro una funcion anonima
    return new Promise ((resolve, reject)=> { // Promise siempre con mayuscula- retorna una promesa con valores 
        //funciones resolve y reject
        (true)
        ?setTimeout(()=> resolve ('hello world'), 3000) // dentro del SetTimeout declaro una funcion anonima la cual va a resolver
        :reject(new Error ('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response)) //pasa los 3000 ms y se cumple la promesa
.catch(error => console.log(error))
.finally(() =>console.log('finalizo')) //informa que finalizo


//mejoras para  agrupar bloques de regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //la constitucion de las fechas 
//primero el año, valores del 0 al 9 con 4 valores o cifras, despues mes, y despues dia
const match =regexData.exec('2018-04-20');
const year = match[1]
const month = match [2]
const day = match [3]

console.log(year, month, day); //2018 04 20