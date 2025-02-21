// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let frends = [];
let IngresandoAmigos;
let CantidadAmigosSecretos =5;


function agregarAmigo() {//Funcion para agregar amigos

    IngresandoAmigos = document.getElementById('amigo').value;
    if (frends.length == CantidadAmigosSecretos){//Validando la cantidad de amigos ingresados
        document.getElementById('amigo').value = '';
        alert("Cantidad MAxima ingresada");//Mensaje de alerta de que ya no se pueden ingresar mas.
    }
    else//Si aun no se cumple la condicion continua agregado
    {
        frends.push(IngresandoAmigos);
        console.log(frends);
        document.getElementById('amigo').value = '';
    }
    
    

    

    
    

    
}
//agregarAmigo();