function show(id){

    document.querySelectorAll(".view").forEach(v=>{
        v.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    if(
        id === "inicio" ||
        id === "usuarios"
    ){
        document.querySelector(".sidebar").style.display = "none";
    }else{
        document.querySelector(".sidebar").style.display = "block";
    }
}

function openForm(){

    if(!document.getElementById("chk").checked){
        alert("Debes aceptar las reglas.");
        return;
    }

    document.getElementById("form").style.display = "block";
}

function toggleContact(){

    document.getElementById("waBox").style.display =
        document.getElementById("wa").checked
        ? "block" : "none";

    document.getElementById("telBox").style.display =
        document.getElementById("tel").checked
        ? "block" : "none";

    document.getElementById("mailBox").style.display =
        document.getElementById("mail").checked
        ? "block" : "none";
}

function cambiarTipo(){

    let tipo = document.getElementById("tipo").value;

    if(
        tipo === "Donación" ||
        tipo === "Intercambio" ||
        tipo === "Emprendimiento vecinal"
    ){
        document.getElementById("precioBox").style.display = "none";
    } else {
        document.getElementById("precioBox").style.display = "block";
    }
}

function enviarAnuncio(){

    let titulo = document.getElementById("titulo").value.trim();
    let precio = document.getElementById("precio").value.trim();
    let descripcion = document.getElementById("descripcion").value.trim();

    let tipo = document.getElementById("tipo").value;

    let wa = document.getElementById("wa").checked;
    let tel = document.getElementById("tel").checked;
    let mail = document.getElementById("mail").checked;

    let whatsapp = document.getElementById("whatsapp").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();

    if(titulo === ""){
        alert("Ingresa un título del anuncio.");
        return;
    }

    if(
        tipo !== "Donación" &&
        tipo !== "Intercambio" &&
        tipo !== "Emprendimiento vecinal" &&
        precio === ""
    ){
        alert("Ingresa el precio.");
        return;
    }

    if(descripcion === ""){
        alert("Ingresa una descripción.");
        return;
    }

    if(!wa && !tel && !mail){
        alert("Selecciona al menos un medio de contacto.");
        return;
    }

    if(wa && whatsapp === ""){
        alert("Ingresa tu número de WhatsApp.");
        return;
    }

    if(tel && telefono === ""){
        alert("Ingresa tu teléfono.");
        return;
    }

    if(mail && correo === ""){
        alert("Ingresa tu correo electrónico.");
        return;
    }

    alert("Anuncio enviado a revisión.");
}