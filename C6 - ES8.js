// en la version del 2017 incorporaron object entries devuelve los valores de una matriz
//ejemplo:
const data={
    fronted:'Nestor',
    backend: 'lore',
    design: 'gonza',
};

console.log(data); //{ fronted: 'Nestor', backend: 'lore', design: 'gonza' }
                    //me lo devuelve en formato Objeto

//transformo este objeto "data " a una matriz:
const entries = Object.entries(data);
console.log(entries);  // [ 'fronted', 'Nestor' ],
                        //[ 'backend', 'lore' ],
                        //[ 'design', 'gonza' ]
                        //me lo devuelve en formato matriz con arreglos de String
console.log(entries.length);//permite saber cuantos elementos hay, en este caso me da 3

// ------------VALUE---------

const data={
    fronted:'Nestor',
    backend: 'lore',
    design: 'gonza',
};

const values=Object.values(data); //genera un arreglo con los valores de los elementos en string
console.log(values); //[ 'Nestor', 'lore', 'gonza' ]

//-------------- PadStart y PadEnd ---------

const string='hello'; //agregamos o anteponemos una cadena vacia o elementos a este string
console.log(string.padStart(7,'hi')); //7 seria el valor de agregar 2 letras mas + 5 letras "hello"
console.log(string.padEnd(12,'-----'));

// --------------- Async Await ----------------
const helloWorld=() => { //constante que va a ser nuestra funcion anonima
    return new Promise((resolve, reject) =>{ //realizamos una promesa 
        (true)
        ? setTimeout(() =>resolve('hello World'),3000) // IF //settimeout lo uso para simular la asincronidad de una API
        : reject(new Error('Test Error')); //ELSE
    })
};
//Async Await
const HelloAsync = async() => { //asi se implementa Async
    const hello = await helloWorld(); //await es solo valido en una funcion Async
    console.log(hello);
}
HelloAsync();

//otra forma de mostrar las promesas

const anotherFunction = async()=> {
    try { //intenta una funcion
        const hello = await helloWorld();
        console.log(hello);        
    } catch (error) { // si pasa un error, muestra el error
        console.log(error);
    }
}
anotherFunction();