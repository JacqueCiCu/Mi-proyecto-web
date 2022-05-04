const contenedor = document.getElementById("contenido-principla");
const url = "https://raw.githubusercontent.com/JacqueCiCu/Curso-FPW-API/master/base_datos.json";
const uri ="https://github.com/JacqueCiCu/Curso-FPW-API/blob/master/"

fetch(url).then(function(respuesta) {
    return respuesta.json();
}).then(function(datos) {
    console.log(datos);
    for(let i = 0; i <datos.length; i++) {
        contenedor.innerHTML += "div class='portadas'><img src='" +uri + datos[i]["imagen"] + "'><h3>" + datos[i]["imagen"] + "'></h3>"
    }
}).catch(function(error) { 
    console.log(error);
});