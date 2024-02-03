let savedName= "Facundo";
let ingreso= false;

//ingreso
function solicitarNombreUsuario(intentosRestantes) {
    return prompt("Ingrese su nombre de usuario, solo tiene " + intentosRestantes + " intentos");
}

for (let i = 2; i >= 0; i--) {
    let userName = solicitarNombreUsuario(i + 1);

    if (userName === savedName) {
        alert("Bienvenido a la Clínica, usted ha ingresado exitosamente");
        ingreso = true;
        break;
    } else {
        alert(userName + " no es un paciente asociado, le quedan " + i + " intentos");
    }
}