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

// DINAMYC IMPORT , se realiza importaciones de forma dinamica

const button = document.getElementById("btn"); // constante se llama al Id que estableci "btn"

button.addEventListener("click", async function () { //metodo para escuchar lo que va a pasar en "btn"
    //en este caso lo que va a vigilar es el "click" - creo una funcion anonima con async ya que tengo
    //que esto pase.
    const module= await import("./file.js"); //una constante module que espere para llamar a "file.js"
    module.hello(); //utilizo la funcion dentro de "file.js"
});