/*
ECMAS es la especificacion del lenguaje por ECMA Internacional
institucion creada para trabajar con estas caracteristicas.

/ECMAScript 6, 7, 2016, etc. Son versiones que nacen parten de Netscape en 1996.
Cada version tiene nueva caracteristicas, en el 2015 lanzaron especificaciones nuevas que permiten
incorporar caracteristicas al lenguaje Javascript

Desde el 2015 hay una version nueva todos los años en Junio. 
*/

/*  PRIMER CLASE
Parametros por defecto, establecemos ciertos valores que le pasamos a una funcion por defecto
ANTES:*/

function newFuntion(name,age,country){
    var name=name || "oscar"; //valor que me dan Name o por defecto "oscar"
    var age=age || 32;
    var country=country || "arg";
    console.log(name,age,country); //devuelve en pantalla name, age, country
};
//AHORA ES6

function newFunction2(name="oscar", age=32,country="arg"){ //inicializo los parametros desde la funcion
    console.log(name,age,country); 
};

newFunction2();
newFunction2("Ricardo",23,"CO"); 

/* Template --- Concatenacion

ANTES: */
let hello = "hello" ;
let world = "world";
let epicPhrase = hello + " " + world;
console.log (epicPhrase);

/*AHORA TEMPLATE */
let epicPhrase2= `${hello} ${world}`; // las comillas son importante
console.log(epicPhrase2); // <-------- con este metodo nos ahorramos
//                                      de poner espacios con +""+ .

