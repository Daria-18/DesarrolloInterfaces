//Tarea 2.6 adaptada
const msgNombre = document.getElementById("msgNombre");
const nombreUsuario = document.getElementById("nombre");
function validarNombre() {
    let inputUser = nombreUsuario.value;
    if (inputUser.length==0) {
        //console.log("Introduce un input");
        msgNombre.style.color = "red";
        msgNombre.textContent = "Introduce un nombre.";
        return false;
    }
    else if (inputUser.length<3) {
        //console.log("Nombre inválido, inserte al menos tres caracteres");
        msgNombre.style.color = "red";
        msgNombre.textContent = "Introduce al menos 3 caracteres.";
        return false;
    }
    else{
        //console.log("Todo OK!")
        msgNombre.style.color = "green";
        msgNombre.textContent = "Nombre correcto.";
        return true;
    }
}

let campoNombre = document.getElementById("nombre");
campoNombre.addEventListener("input",validarNombre);
////////////////////////////////////////////////////////////////////////////
//
//Apartado 1:

const formularioEdad = document.getElementById("edad");
const msgEdad = document.getElementById("msgEdad"); //etiqueta small que precede al input

function validarEdad(){
    let edadUsuario = formularioEdad.value;

    //campo vacio
    if(edadUsuario == ""){
        msgEdad.style.color = "red"; //solo color como string
        msgEdad.textContent = "Introduce la edad.";
        return false;
    }

    //si no se introduce un valor numérico
    else if(isNaN(edadUsuario)){
        msgEdad.style.color = "red"; 
        msgEdad.textContent = "Introduce un número.";
        return false;
    }

    //Numérico fuera de rango
    else if (edadUsuario < 16 || edadUsuario > 60) {
        msgEdad.textContent = "La edad debe ser entre 16 y 60";
        msgEdad.style.color = "red";
        return false;
    }

    //Default
    else {
        msgEdad.textContent = "Edad válida";
        msgEdad.style.color = "green";
        return true;
    }

}

formularioEdad.addEventListener("input",validarEdad);

//Apartado 2:
const formularioEmail = document.getElementById("email");
const msgEmail = document.getElementById("msgEmail");

function validarEmail(){
    let emailUsuario = formularioEmail.value;

    if(emailUsuario.length < 6 || !emailUsuario.includes("@") || !emailUsuario.includes(".")){
        msgEmail.style.color = "red";
        msgEmail.textContent = "Introduce un email válido.";
        return false;
    }
    else if(emailUsuario.includes("@yahoo.")){
        msgEmail.style.color = "red";
        msgEmail.textContent = "No se permiten correos del dominio yahoo.";
        return false;
    }
    else{
        msgEmail.style.color = "green";
        msgEmail.textContent = "Email válido.";
        return true;
    }

}

formularioEmail.addEventListener("input",validarEmail);

//Apartado 3:
const formularioCiclo = document.getElementById("ciclo");
const msgCiclo = document.getElementById("msgCiclo");

function validarCiclo(){
    let cicloUsuario = formularioCiclo.value;

    //value en html null
    if(cicloUsuario == ""){
        msgCiclo.style.color = "red";
        msgCiclo.textContent = "Selecciona un ciclo válido.";
        return false;
    }
    else{
        msgCiclo.style.color = "green";
        msgCiclo.textContent = "Ciclo válido.";
        return true;
    }
    

}

formularioCiclo.addEventListener("input",validarCiclo);

//Apartado 4:
const formularioMods = document.getElementsByName("modulos"); //array de checkboxes de módulos
const msgMods = document.getElementById("msgMods");

function validarModulos(){
    let totalModulos = 0;

    for(let i = 0; i < formularioMods.length; i++){
        if(formularioMods[i].checked) totalModulos++;
    }
    
    if(totalModulos < 2){
        msgMods.style.color = "red";
        msgMods.textContent = "Debes de checkear dos opciones.";
        return false;
    }

    else{
        msgMods.style.color = "green";
        msgMods.textContent = "Se han insertado al menos dos opciones.";
        return true;
    }

}

//formularioMods.addEventListener("change",validarModulos);
//Iterar cada elemento
//for var in var no funciona ya que devuelve el indice, se puede recorrer con for of que devuelve el valor en esa posicion
for(let checkbox of formularioMods){
    checkbox.addEventListener("change",validarModulos);
}

//Apartado 5:
const formularioAceptarCondiciones = document.getElementById("acepto");
const msgAcepto = document.getElementById("msgAcepto");

function validarAceptar(){
    if (formularioAceptarCondiciones.checked){
        msgAcepto.style.color="green";
        msgAcepto.textContent = "Condiciones aceptadas";
        return true;
    }
    else{
        msgAcepto.style.color = "red";
        msgAcepto.textContent = "Se deben de aceptar las condiciones.";
        return false;
    }
}

formularioAceptarCondiciones.addEventListener("change",validarAceptar);

//Apartado 6:
const botonRecargar = document.getElementById("btnReload");

botonRecargar.addEventListener("click", function () {
    window.location.reload();
});

//Apartado 7:
//Boton limpiar ya funciona en el html, solo debemos implementar el borrar los mensajes de confirmacion
const botonLimpiar = document.getElementById("btnReset");

botonLimpiar.addEventListener("click",function(){
    let mensajesComprobacion = document.querySelectorAll(".msg"); //obtenemos un array con todos los elementos de la classe msg
    //por cada elemento seteamos el texto vacio
    for(let i = 0; i<mensajesComprobacion.length; i++){mensajesComprobacion[i].textContent="";} 
});

//Apartado 8:
const formularioTodo = document.getElementById("formMatricula");

function validarFormulario(evento){
    //Para no realizar submit:
    evento.preventDefault(); //https://www.w3schools.com/jsref/event_preventdefault.asp

    //Arrays Auxiliares para la alerta
    let totalErrores = [];
    let totalValidos = [];

    //Array asociativo de campo con su función correspondiente
    let campos = [
        {nombre: "Nombre", validacion: validarNombre},
        {nombre: "Edad", validacion: validarEdad},
        {nombre: "Email", validacion: validarEmail},
        {nombre: "Ciclo", validacion: validarCiclo},
        {nombre: "Modulos", validacion: validarModulos},
        {nombre: "Condiciones", validacion: validarAceptar},
    ];

    //for of de vuelta:
    for (let campo of campos){
        if(campo.validacion()){
            totalValidos.push(campo.nombre);
        }else{
            totalErrores.push(campo.nombre);
        }
    }

    // \t no funciona correctamente en las alertas
    //https://www.w3schools.com/jsref/jsref_join.asp -> array join
    if (totalErrores.length > 0){
        alert("Campos no Válidos:\n   -"+totalErrores.join("\n   -")
        +"\n\nCampos Válidos:\n   -"+totalValidos.join("\n   -"));
        return false;
    }

    
    alert("Campos Válidos:\n   -"+totalValidos.join("\n   -"));
    return true;

}

formularioTodo.addEventListener("submit", validarFormulario);