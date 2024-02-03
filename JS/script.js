let savedName = "Facundo";
let ingreso = false;


function solicitarNombreUsuario(intentosRestantes) {
    return prompt("Ingrese su nombre de usuario, solo tiene " + intentosRestantes + " intentos");
}


function mostrarOpcion() {
    return prompt("Escoja el número de la consulta que desea realizar: \n1- Obtener un turno \n2- Conocer costos de estudios o laboratorio \n3- Contactarse con nosotros \n4- Salir \n");
}


function obtenerTurnoMedico(medico) {
    let turno = prompt("Escoja el día y horario en el que desea asistir a su consulta con el " + medico.nombre + ":\n1- " + medico.dias[0] + "\n2- " + medico.dias[1]);

    if (turno === "1") {
        alert("Usted ha reservado su turno con el " + medico.nombre + " para el día " + medico.dias[0]);
    } else if (turno === "2") {
        alert("Usted ha reservado su turno con el " + medico.nombre + " para el día " + medico.dias[1]);
    } else {
        alert("Opción no válida");
    }
}


function calcularCostoEstudio(estudio, costo) {
    let prepaga = prompt("El costo de " + estudio + " es de " + costo + " dólares por persona. ¿Cuenta con algún prestador de medicina prepaga?\n1- Sí\n2- No");

    if (prepaga === "1") {
        let descuento = costo * 0.1;
        let costoConDescuento = costo - descuento;
        alert("El coste de cada " + estudio + " es de " + costoConDescuento + " dólares.\n(Usted obtuvo un descuento del 10% por contar con un prestador de medicina prepaga)");
    } else if (prepaga === "2") {
        alert("Al no contar con un prestador de medicina prepaga, el valor no obtiene descuento y sigue siendo de " + costo + " dólares por cada " + estudio + ".");
    } else {
        alert("Opción no válida");
    }
}


const medicos = [
    { nombre: "Doctor Lionel Messi", dias: ["Martes a las 16:30hs", "Miércoles a las 14:45hs"] },
    { nombre: "Doctor Diego Armando Maradona", dias: ["Lunes a las 14:25hs", "Viernes a las 10:15hs"] },
    { nombre: "Doctor Juan Roman Riquelme", dias: ["Jueves a las 10hs", "Sábado a las 11:15hs"] },
    { nombre: "Doctor Dibu Martinez", dias: ["Martes a las 18hs", "Jueves a las 17:30hs"] }
];


const estudios = [
    { nombre: "Tomografía", costo: 500 },
    { nombre: "Radiografía", costo: 350 },
    { nombre: "Extracción de sangre", costo: 150 }
];


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