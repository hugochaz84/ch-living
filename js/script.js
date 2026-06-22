function show(id){

    document.querySelectorAll(".view")
    .forEach(v => v.classList.remove("active"));

    document.getElementById(id)
    .classList.add("active");
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

function enviarAnuncio(){

    let titulo =
        document.querySelector('input[placeholder="Título del anuncio"]').value;

    let descripcion =
        document.querySelector("textarea").value;

    let contacto =
        document.getElementById("wa").checked ||
        document.getElementById("tel").checked ||
        document.getElementById("mail").checked;

    if(titulo.trim() === ""){
        alert("Ingresa un título.");
        return;
    }

    if(descripcion.trim() === ""){
        alert("Ingresa una descripción.");
        return;
    }

    if(!contacto){
        alert("Selecciona un medio de contacto.");
        return;
    }

    alert("Anuncio enviado a revisión.");
}