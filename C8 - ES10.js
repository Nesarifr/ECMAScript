// <-------------- array.flat ----------->


let array = [1,2,3, [1,2,3,[1,2,3]]]; //ciertos niveles dentro del arreglo principal

console.log(array.flat(1)) //[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ] devuelva una matriz aplanada (elimina los niveles)
console.log(array.flat(2)) // resulta ---> (devuelva una matriz aplanada eliminando 2 nivles)
/* [
    1, 2, 3, 1, 2,
    3, 1, 2, 3
  ] */ //crea una matriz aplanda sin niveles.

// <-------------- array.flatmap ----------->

let array = [1,2,3,4,5]; //arreglo llamada array
console.log(array.flatMap(value => [value, value*2])); //ingresa cada elemento de "array" y retorna dicho valorx2
// imprime [1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ] el primer valor es 1 y lo multiplica x 2 = 2 [1,2]
// despues imprime el valor 2 y lo multiplica x2 = 4 [2,4] .... [3,6] [4,8] [5,10]

// <-------------- trimStart() -------------->

let hello = '                 hello world'; 
console.log(hello);//"                 hello world"
console.log(hello.trimStart());// "hello world" elimina espacios al comienzo

// <-------------- trimEnd() --------------->
let hello = 'hello world           '; 
console.log(hello);//"hello world            "
console.log(hello.trimEnd());// "hello world" elimina espacios al final

// <-------------- Object.fromEntries() --------------->

let entries = [["name", "Nestor"],["age", 32]]; //inicializo un arreglo 
console.log(Object.fromEntries(entries)); // lo transformo en un objeto { name: 'Nestor', age: 32 }

// <-------------- Objecto del tipo simbolo--------------->

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);