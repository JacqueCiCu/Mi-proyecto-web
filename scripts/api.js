const contenedor = document.getElementById("contenido-principal");
const url = "https://raw.githubusercontent.com/JacqueCiCu/Curso-FPW-API/master/base_datos.json";
const uri ="https://raw.githubusercontent.com/JacqueCiCu/Curso-FPW-API/master/" 

fetch(url).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    for(let i = 0; i <data.length; i++) {
        contenedor.innerHTML += "<div class='card'><div class='face front'><img src='" +uri + data[i]["imagen"] + "'><h3>" + data[i]["nombre"] + "</h3></div></div>";
        contenedor.innerHTML += "<div class='card'><div class=face back'>" + '<h3>' + data[i]["h3"] + data[i]["p"] + '</h3></div></div>';
    }
}).catch(function(error) { 
    console.log(error);
});