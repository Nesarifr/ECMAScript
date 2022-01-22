// <------------- Propiedades de objetos -------------- >
let name = 'Nestor';
let age = 32;

//es5
obj = { name: name, age: age}; //antes se creaban asi los objetos, asignando variables a las propiedades
//es6
obj2 ={name, age};// asignamos los valores a las propiedades automaticamente

console.log(obj2); //imprime propiedades y valores 

// <----------------------- ARROW function ------------>
//estas funciones permiten trabajar con dos elementos y sintaxis mas reducida.
//Ejemplo:

const names=[ //genero un arreglo
    { name : 'Nestor', age : 32}, //varios elementos en un objeto
    { name: 'lore', age:29}
]
// para iterar estos elementos /objetos, uso el Metodo map

let lisOfName = names.map(function (item){ //arreglo con metodo map. la pasamos a una funcion anonima
    //bloque de codigo
    console.log(item.name);
})

let listOfNames2 = names.map(item =>{console.log(item.name)});
//=> establece que es una funcion anonima y que va a retonar algo

//otros ejemplos de Arrow : 

const listOfNames3 = (name, age, country) => {
    // codigo list of names 3
    console.log(name, age, country);
}
const listOfNames4 = name => {
    //codigo list of names 4
}

const square = num => num * num;  //genero una funcion q recibe la funcion numero, lo multiplica por si mismo
                                    // y retorna el cuadrado de este numero


/* <--------------------------- PROMESAS  ----------------- > 
debido a que JS no es sincronico, ejecuta elemento por elemento, las promesas vienen a solucionar 
un problema con los Callbacks.
"algo va a pasar" en un momento va a pasar algo que estamos estableciendo.
*/

const helloPromise = () => { //Genero la promesa (arrow function)
    return new Promise((resolve, reject) =>{ // retorno una nueva promesa con los elementos resolve, reject
        //la promesa se va a resolver o se va a rechazar
        if (true){ //la logica que se va a resolver, if True --resolve, if false pasa al --reject
            resolve ('Hey! se resolvio la promesa');
        } else {
            reject ('Ups! algo salio mal!!');
        }
    })
}

helloPromise() //para ejecutarla
.then(response => console.log(response)) //el valor .then me da la respuesta (se puede mas elementos then)
.catch(error => console.log(error)) //en caso de que fuera rechazada, me muestra el valor .catch