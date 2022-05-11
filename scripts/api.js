const contenedor = document.getElementById("contenido-principal");
const url = "https://raw.githubusercontent.com/JacqueCiCu/Curso-FPW-API/master/base_datos.json";
const uri ="https://raw.githubusercontent.com/JacqueCiCu/Curso-FPW-API/master/" 

fetch(url).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    for(let i = 0; i <data.length; i++) {
        contenedor.innerHTML += "<div class='card' class='face  back'><img src='" +uri + data[i]["imagen"] + "'><h3>" + data[i]["nombre"] + data[i]["texto"] + data[i]["sinopsis"] + "</h3></div>";
    }
}).catch(function(error) { 
    console.log(error);
});