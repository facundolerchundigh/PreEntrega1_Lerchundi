let savedName= "Facundo";
let ingreso= false;

//ingreso
for (let i=2; i>=0; i--){
    let userName= prompt("Ingrese su nombre de usuario, solo tiene "+ (i+1) +" intentos");

    if (userName==savedName){
        alert ("Bienvenido, usted ha ingresado exitosamente");
        ingreso= true;
        break
    }else {
        alert (userName + " no es un paciente asociado, le quedan " + i + " intentos");
    }
}

if (ingreso){
    let opcion= prompt("Escoja el numero de la consulta que desea realizar: \n1- Obtener un turno \n2- Conocer costos de estudios o laboratorio \n3- Contactarse con nosotros \n4- Salir")
    while(opcion !="4" && opcion !="Salir" && opcion!="salir"){
        switch(opcion){
            case "1":
                let doctor= prompt("Escoja el numero del especialista con el cual desea atenderse: \n1- Doctor Lionel Messi \n2- Doctor Diego Armando Maradona \n3- Doctor Juan Roman Riquelme \n4- Doctor Dibu Martinez")
                if (doctor==="1"){
                    let turno= prompt("Escoja el dia y horario en el que desea asistir a su consulta con el Doctor Lionel Messi: \n1- Martes a las 16:30hs \n2- Miercoles a las 14:45hs")
                    if(turno==="1"){
                        alert("Usted ha reservado su turno con el Doctor Lionel Messi para el dia martes a las 16:30hs")
                        break
                    }else(turno==="2");{
                        alert("Usted ha reservado su turno con el Doctor Lionel Messi para el dia miercoles a las 14:15hs")
                    }
                } else if (doctor==="2"){
                    let turno= prompt("Escoja el dia y horario en el que desea asistir a su consulta con el Doctor Diego Armando Maradona: \n1- Lunes a las 14:25hs \n2- Viernes a las 10:15hs")
                    if(turno=="1"){
                        alert("Usted ha reservado su turno con el Doctor Diego Armando Maradona para el dia lunes a las 14:25hs")
                        break
                    }else(turno=="2");{
                        alert("Usted ha reservado su turno con el Doctor Diego Armando Maradona para el dia viernes a las 10:15hs")
                    }
                } else if (doctor==="3"){
                    let turno= prompt("Escoja el dia y horario en el que desea asistir a su consulta con el Doctor Juan Roman Riquelme: \n1- Jueves a las 10hs \n2- Sabado a las 11:15hs")
                    if(turno=="1"){
                        alert("Usted ha reservado su turno con el Doctor Juan Roman Riquelme para el dia jueves a las 10hs")
                        break
                    }else(turno=="2");{
                        alert("Usted ha reservado su turno con el Doctor Juan Roman Riquelme para el dia sabado a las 11:15hs")
                    }
                } else if (doctor==="4"){
                    let turno= prompt("Escoja el dia y horario en el que desea asistir a su consulta con el Doctor Dibu Martinez: \n1- Martes a las 18hs \n2- Jueves a las 17:30hs")
                    if(turno=="1"){
                        alert("Usted ha reservado su turno con el Doctor Dibu Martinez para el dia martes a las 18hs")
                        break
                    }else (turno=="2");{
                        alert("Usted ha reservado su turno con el Doctor Dibu Martinez para el dia jueves a las 17:30hs")
                    }
                } else {
                    alert("Opcion no valida")
                }
            case "2":
                let estudios= prompt("Escoja el numero del estudio por el cual quiere consultar su costo: \n1- Tomografia \n2- Radiografia \n3- Extraccion de sangre")
                let tomografia=500
                let radiografia=350
                let sangre=150
                if(estudios="1"){
                    let prepaga= prompt("El costo de las tomografias es de "+tomografia+" dolares por persona, usted cuenta con algun prestador de medicina prepaga? \n1- Si \n2- No")
                    descuentoPrepagaTomo()
                }
        }
    break
    }
    function descuentoPrepagaTomo(){
        tomoConDescuento=tomografia*0.1
        alert ("El coste de la tomografia es de "+tomoConDescuento+" dolares.")
    }
}