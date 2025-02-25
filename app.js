// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let frends = [];
let IngresandoAmigos;
let CantidadAmigosSecretos = 5;
let indiceAmigoSecreto;
let nombreAmigoSecreto;
let lista;
let creli;


function agregarAmigo() {//Funcion para agregar amigos

    IngresandoAmigos = document.getElementById('amigo').value;
    if (frends.length == CantidadAmigosSecretos){//Validando la cantidad de amigos ingresados
        document.getElementById('amigo').value = '';
        alert("Cantidad MAxima ingresada");//Mensaje de alerta de que ya no se pueden ingresar mas.
    }
    else//Si aun no se cumple la condicion continua agregado
    {
        frends.push(IngresandoAmigos);
        //console.log(frends);
        document.getElementById('amigo').value = '';//Limpiar campo
    }
        recorrerLista();
    }

    function recorrerLista() {
        lista = document.getElementById("listaAmigos");//Llama a la lista en HTml
        lista.innerHTML = "";

        for (let i = 0; i <= frends.length; i++) {//Recorre el array para ir agregando a la lista de HTML.
            creli = document.createElement("li");
            creli.textContent = frends[i];
            lista.appendChild(creli);//Agrega el nombre al "li"

            
            
        }
        
    }

    function sortearAmigo() {
        if (frends != ""){
            //console.log("No esta vacio");
            indiceAmigoSecreto = Math.floor(Math.random()*frends.length);
            nombreAmigoSecreto = frends[indiceAmigoSecreto];
            console.log("Tu amigo secreto es: "+nombreAmigoSecreto);
            
            lista.innerHTML = "";
            lista = document.getElementById("listaAmigos");
            creli = document.createElement("li");
            creli.textContent = nombreAmigoSecreto;
            lista.appendChild(creli);
            





        }
        else{
            alert("Debe de ingresar por lo menos un amigo");
        }
        //lista.appendChild(nombreAmigoSecreto);
        
    }
