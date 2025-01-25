// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value.trim();

    if (nombreIngresado.length === 0) {
        alert("Debe ingresar un nombre");
    } else {
        amigos.push(nombreIngresado);
        document.getElementById("amigo").value = ""; 
        recorrerArrayAmigos(); // Llamar a la función para actualizar la lista en la página
    }
}
function recorrerArrayAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    if (!listaAmigos) {
        console.error("El elemento con id 'listaAmigos' no se encontró en el HTML.");
        return;
    }
    listaAmigos.innerHTML = "";// Limpiar la lista antes de agregar nuevos elementos
    amigos.forEach(amigo => {// Agregar cada amigo como un elemento <li>
        let listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}
function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    if (amigos.length ==0){
        resultado.innerHTML = "<li>¡No hay amigos para sortear!</li>";
        return;
    }
    let posicionAleatoria = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[posicionAleatoria];
    resultado.innerHTML = `<li>¡El amigo sorteado es ${amigoSorteado}!</li>`;
}