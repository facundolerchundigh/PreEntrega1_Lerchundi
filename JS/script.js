let savedName = "Facundo";
let ingreso = false;

//ingreso
function solicitarNombreUsuario(intentosRestantes) {
    return prompt("Ingrese su nombre de usuario, solo tiene " + intentosRestantes + " intentos");
}

function mostrarOpcion() {
    return prompt("Escoja el número de la consulta que desea realizar: \n1- Obtener un turno \n2- Conocer costos de estudios o laboratorio \n3- Contactarse con nosotros \n4- Salir \n");
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

if (ingreso) {
    let opcion;
    do {
        opcion = mostrarOpcion();

        switch (opcion) {
            case "1":
                let medicoChoice = prompt("Escoja el número del especialista con el cual desea atenderse:\n" + medicos.map((medico, index) => (index + 1) + "- " + medico.nombre).join("\n"));
                medicoChoice = parseInt(medicoChoice);
                if (medicoChoice >= 1 && medicoChoice <= medicos.length) {
                    obtenerTurnoMedico(medicos[medicoChoice - 1]);
                } else {
                    alert("Opción no válida");
                }
                break;
            case "2":
                let estudioChoice = prompt("Escoja el número del estudio por el cual quiere consultar su costo:\n" + estudios.map((estudio, index) => (index + 1) + "- " + estudio.nombre).join("\n"));
                estudioChoice = parseInt(estudioChoice);
                if (estudioChoice >= 1 && estudioChoice <= estudios.length) {
                    calcularCostoEstudio(estudios[estudioChoice - 1].nombre, estudios[estudioChoice - 1].costo);
                } else {
                    alert("Opción no válida");
                }
                break;
            case "3":
                alert("Nuestros medios de contacto:\nTel: 4444-4444\nEmail: clinica@clinica.com\nDirección: Avenida clínica 2345, CABA\nAtención las 24hs");
                break;
            case "4":
                break;
            default:
                alert("Opción no válida");
        }
    } while (opcion !== "4");
}