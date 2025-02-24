//alert("Estoy conectado"); 

//Creando la lista que contendra los nombres de los amigos
let lista_amigos = [];


function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    // verifica que la variable nombre contenga una cadena vacia
    //si es una cadena vacia mostar un mensaje 
    //trim quita posibles espacios en blanco
    if(nombre.trim() === ""){
        alert("Por favor insete un nombre");
    }else{
        //agrega el nombre a la lista
        lista_amigos.push(nombre);  
        //resetea el campo de texto
       document.getElementById('amigo').value = "";     
    }
    //console.log(nombre);agregar
    //console.log(`lista de amigos:o :${lista_amigos.toString()}`);
    mostrarLista(lista_amigos);
}

function mostrarLista(lista){
    let listaElement = document.getElementById("listaAmigos");
    //limpia la lista antes de actualizar
    listaElement.innerHTML = "";
    //recorre el arreglo de los nombres de amigos y los muestra en una lista
    for(let i=0; i<lista.length;i++){
        let item = document.createElement("li");
        item.textContent = `${i+1}. ${lista[i]}`
        listaElement.appendChild(item);
        //console.log(`${i}  ${lista[i]}`);
    }
}
