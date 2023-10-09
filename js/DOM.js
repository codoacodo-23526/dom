console.log(document); // document es un objeto


console.log(document.querySelector("h1")); // selecciona el primer elemento h1


//let nombre = prompt("Ingrese su nombre"); // muestra un cuadro de dialogo con un input para ingresar texto

// document.querySelector("h1").innerHTML = "Hola " + nombre;


// console.log(document.querySelectorAll("h1")); // selecciona todos los elementos h1


// document.querySelector("div").innerText = "Hola " + nombre; // selecciona el primer elemento div y le cambia el texto


// document.getElementById("nombre-div").innerHTML = "Hola " + nombre; // selecciona el elemento con id nombre-div y le cambia el texto

console.log(window.innerHeight) // muestra el alto de la ventana del navegador


document.getElementById("nombre-div").innerHTML = window.innerHeight + "px" + " de alto " + window.innerWidth + "px" + " de ancho"; // selecciona el elemento con id nombre-div y le cambia el texto

console.log(window.location.href) // muestra la url de la pagina


//window.location.href = "https://www.google.com.ar/"; // redirecciona a la url indicada


document.createElement("h2").innerHTML = "Hola ";


document.getElementById("nombre-div").style.color = "red"; // cambia el color del texto del elemento con id nombre-div