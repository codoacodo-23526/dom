
let nombreObjeto = { // objeto literal
    nombre: "lionel",
    edad: 36,
    saludar: function(){
        console.log("Hola");
    }
}

console.log(nombreObjeto);
console.log(nombreObjeto.nombre); // lionel
console.log(nombreObjeto.edad); // 36
nombreObjeto.saludar(); // Hola

let nombreArray = [1,2,3,4,5,6,7,8,9,10]; // array

console.log(nombreArray);
console.log(nombreArray[0]); // 1
console.log(nombreArray.length); // 10 (cantidad de elementos)

