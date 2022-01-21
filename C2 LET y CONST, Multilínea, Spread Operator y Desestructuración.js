/* ------------------MULTI LINEA------------------ */

/* Antes */
let lorem = "Practicando JavasScript y las \n"
+ "caracteristicas de ECMAS6.";

/* AHORA */
let lorem2 = `Practicando JavaScript y las 
caracteristicas de ECMAS6
`;

console.log(lorem);
console.log(lorem2); // ambas se imprimen igual

// ------------------ Destructuracion de elementos ------------------

//ANTES:
let person={ //OBJETO con 3 elementos
    'name' : 'Nestor',
    'age': 30,
    'country': 'arg',
}
console.log(person.name, person.age);

//AHORA destructuramos los elementos:
let {name, age, country}=person;
console.log( name , age, country); // de esta manera solo escribo los elementos que voy a necesitar

/* ------------------ OPERADOR DE PROPAGACION ------------------
permite expandir varios elementos, ejemplo: 
ciertos elementos en arreglos y quiero unirlos */
let team1=['Nestor', 'Gonza', 'Tilin'];
let team2=['Lore', 'Mechi', 'Juana'];

let education= ['David', ...team1, ...team2];
//este operador permite unir estos elementos
console.log(education);

/* ------------------ LET ------------------
elementos que queremos guardar en memoria, antiguamente teniamos Var de manera Global.
con Let lo tenemos disponible unicamente en el Scope (bloque de codigo) que va a ser llamado.
Ejemplo:
*/

{var globalvar = "global var";}

{let globalet = "global let";}
console.log(globalvar); //es accesible 
console.log(globalet); //no es accesible porque este en el Scope

// para solucionar esto, tendria que imprimir dentro del Scope

{var globalvar = "global var";}

{let globalet = "global let";
console.log(globalet); //dentro del scope, es accesible
//por eso es conveniente establecer LET
}
console.log(globalvar); //es accesible 

/* ------------------ CONST ------------------ */

const A ='B';
A = 'a'; // Error, ya que una constante no se puede modificar, su valor es constante a diferencia de Var. 





