//document.write("<h1>hola, como te va?</h1>")
//console.log(document)
document.querySelector("title").innerHTML = "Hola";

let listTareas = []; // array vacio 


function agregarTarea(){

    let nuevaTarea = document.getElementById("nuevaTarea").value;
    let texto = nuevaTarea.trim();

    let tareasHtml = document.getElementById("listaTareas");
    tareasHtml.innerHTML = "";

    if (texto !== ""){
        listTareas.push(texto) // AGREGAR AL ARRAY ESA TAREA

        document.getElementById("nuevaTarea").value = "";

        for (let i = 0; i <= listTareas.length - 1; i++) {

            let li = document.createElement("li");

            li.innerHTML = "<p>"+ listTareas[i] +"</p>"

            tareasHtml.appendChild(li);
        }
        
    }

}