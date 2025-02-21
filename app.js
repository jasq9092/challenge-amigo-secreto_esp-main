// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let frends = [];
let IngresandoAmigos;
let CantidadAmigosSecretos =5;


function agregarAmigo() {

    IngresandoAmigos = document.getElementById('amigo').value;
    if (frends.length == CantidadAmigosSecretos){
        document.getElementById('amigo').value = '';
        alert("Cantidad MAxima ingresada");
    }
    else
    {
        frends.push(IngresandoAmigos);
        console.log(frends);
        document.getElementById('amigo').value = '';
    }
    
    

    

    
    

    
}
//agregarAmigo();