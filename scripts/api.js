const contenedor = document.getElementById("contenido-principal");
const url = "https://raw.githubusercontent.com/JacqueCiCu/Curso-FPW-API/master/base_datos.json";
const uri ="https://raw.githubusercontent.com/JacqueCiCu/Curso-FPW-API/master/" 

fetch(url).then(function(respuesta) {
    return respuesta.json();
}).then(function(datos) {
    console.log(datos);
    for(let i = 0; i <datos.length; i++) {
        contenedor.innerHTML += "<div class='card' class='face back'><img src='" +uri + datos[i]["imagen"] + "'><h3>" + datos[i]["nombre"] + datos[i]["texto"] + datos[i]["sinopsis"] + "</h3>"
    }
}).catch(function(error) { 
    console.log(error);
});