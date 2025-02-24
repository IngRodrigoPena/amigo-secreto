//alert("Estoy conectado"); 

//Creando la lista que contendra los nombres de los amigos
let lista_amigos = [];


function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    // verifica que la variable nombre contenga una cadena vacia
    //si es una cadena vacia mostar un mensaje 
    //trim quita posibles espacios en blanco
    if(nombre.trim === ""){
        alert("Por favor insete un nombre");
    }else{
        //agrega el nombre a la lista
        lista_amigos.push(nombre);  
        //resetea el campo de texto
       document.getElementById('amigo').value = "";     
    }
    //console.log(nombre);
    console.log(`lista de amigos:o :${lista_amigos.toString()}`);
}