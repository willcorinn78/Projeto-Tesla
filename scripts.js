// document = ir no HTML
// querylector = busca o que eu quiser que ele busque

let formulario = document.querySelector(".formulario")
let formularioTestDrive = document.querySelector(".formularioTestDrive");

function aparecerFormulario(){
    formulario.style.left = "70%"
}

function desaparecerFormulario(){
    formulario.style.left = "-70%"
}


function aparecerFormularioTestDrive(){
    formularioTestDrive.style.left = "70%";  
}

function desaparecerFormularioTestDrive(){
    formularioTestDrive.style.left = "-70%"
}