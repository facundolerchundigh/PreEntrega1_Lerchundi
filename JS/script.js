let savedName= "Facundo";
let ingreso= false;

//ingreso
for (let i=2; i>=0; i--){
    let userName= prompt("Ingrese su nombre de usuario, solo tiene "+ (i+1) +" intentos");

    if (userName==savedName){
        alert ("Bienvenido a la Clinica, usted ha ingresado exitosamente");
        ingreso= true;
        break
    }else {
        alert (userName + " no es un paciente asociado, le quedan " + i + " intentos");
    }
}

if (ingreso){
    function mostrarOpcion() {
        let opcion= prompt("Escoja el numero de la consulta que desea realizar: \n1- Obtener un turno \n2- Conocer costos de estudios o laboratorio \n3- Contactarse con nosotros \n4- Salir \n")
        return opcion
    }
    let valorDeMostrarOpcion = mostrarOpcion()
    while(valorDeMostrarOpcion !="4" && valorDeMostrarOpcion !="Salir" && valorDeMostrarOpcion !="salir"){
        switch(valorDeMostrarOpcion){
            case "1":
                let doctor= prompt("Escoja el numero del especialista con el cual desea atenderse: \n1- Doctor Lionel Messi \n2- Doctor Diego Armando Maradona \n3- Doctor Juan Roman Riquelme \n4- Doctor Dibu Martinez \n")
                if (doctor==="1"){
                    let turno= prompt("Escoja el dia y horario en el que desea asistir a su consulta con el Doctor Lionel Messi: \n1- Martes a las 16:30hs \n2- Miercoles a las 14:45hs \n")
                    if(turno==="1"){
                        alert("Usted ha reservado su turno con el Doctor Lionel Messi para el dia martes a las 16:30hs");
                        break;
                    }else(turno==="2");{
                        alert("Usted ha reservado su turno con el Doctor Lionel Messi para el dia miercoles a las 14:15hs");
                        break;
                    }
                } else if (doctor==="2"){
                    let turno= prompt("Escoja el dia y horario en el que desea asistir a su consulta con el Doctor Diego Armando Maradona: \n1- Lunes a las 14:25hs \n2- Viernes a las 10:15hs \n")
                    if(turno=="1"){
                        alert("Usted ha reservado su turno con el Doctor Diego Armando Maradona para el dia lunes a las 14:25hs");
                        break;
                    }else(turno=="2");{
                        alert("Usted ha reservado su turno con el Doctor Diego Armando Maradona para el dia viernes a las 10:15hs");
                        break;
                    }
                } else if (doctor==="3"){
                    let turno= prompt("Escoja el dia y horario en el que desea asistir a su consulta con el Doctor Juan Roman Riquelme: \n1- Jueves a las 10hs \n2- Sabado a las 11:15hs \n")
                    if(turno=="1"){
                        alert("Usted ha reservado su turno con el Doctor Juan Roman Riquelme para el dia jueves a las 10hs");
                        break;
                    }else(turno=="2");{
                        alert("Usted ha reservado su turno con el Doctor Juan Roman Riquelme para el dia sabado a las 11:15hs");
                        break;
                    }
                } else if (doctor==="4"){
                    let turno= prompt("Escoja el dia y horario en el que desea asistir a su consulta con el Doctor Dibu Martinez: \n1- Martes a las 18hs \n2- Jueves a las 17:30hs \n")
                    if(turno=="1"){
                        alert("Usted ha reservado su turno con el Doctor Dibu Martinez para el dia martes a las 18hs");
                        break;
                    }else (turno=="2");{
                        alert("Usted ha reservado su turno con el Doctor Dibu Martinez para el dia jueves a las 17:30hs");
                        break;
                    }
                } else {
                    alert("Opcion no valida")
                }
            break;
            case "2":
                let estudios= prompt("Escoja el numero del estudio por el cual quiere consultar su costo: \n\n1- Tomografia \n2- Radiografia \n3- Extraccion de sangre \n")
                let tomografia=500
                let radiografia=350
                let sangre=150
                function descuentoPrepagaTomo(){
                    let descuento=tomografia*0.1
                    let tomoConDescuento=tomografia-descuento
                    alert ("El coste de cada tomografia es de "+tomoConDescuento+" dolares.\n(Usted obtuvo un descuento del 10% por contar con un prestador de medicina prepaga)")
                }

                function descuentoPrepagaRadio(){
                    let descuento=radiografia*0.1
                    let radioConDescuento=radiografia-descuento
                    alert ("El coste de cada radiografia es de "+radioConDescuento+" dolares.\n(Usted obtuvo un descuento del 10% por contar con un prestador de medicina prepaga)")
                }

                function descuentoPrepagaSangre(){
                    let descuento=sangre*0.1
                    let sangreConDescuento=sangre-descuento
                    alert ("El coste de cada extraccion de sangre es de "+sangreConDescuento+" dolares.\n(Usted obtuvo un descuento del 10% por contar con un prestador de medicina prepaga)")
                }
                if(estudios=="1"){
                    let prepaga= prompt("El costo de las tomografias es de "+tomografia+" dolares por persona, usted cuenta con algun prestador de medicina prepaga? \n\n1- Si \n2- No \n")
                    if(prepaga==="1"){
                        descuentoPrepagaTomo()
                    } else{
                        alert("Al no contar con un prestador de medicina prepaga el valor no obtiene descuento y sigue siendo de 500 dolares por cada tomografia.")
                        
                    }
                } else if(estudios==="2"){
                    let prepaga= prompt("El costo de las radiografias es de "+radiografia+" dolares por persona, usted cuenta con algun prestador de medicina prepaga? \n\n1- Si \n2- No \n")
                    if(prepaga==="1"){
                        descuentoPrepagaRadio()
                    } else{
                        alert("Al no contar con un prestador de medicina prepaga el valor no obtiene descuento y sigue siendo de 350 dolares por cada radiografia.")
                        
                    }
                } else if(estudios==="3"){
                    let prepaga= prompt("El costo de las extracciones de sangre es de "+sangre+" dolares por persona, usted cuenta con algun prestador de medicina prepaga? \n\n1- Si \n2- No \n")
                    if(prepaga==="1"){
                        descuentoPrepagaSangre()
                    } else{
                        alert("Al no contar con un prestador de medicina prepaga el valor no obtiene descuento y sigue siendo de 150 dolares por cada extraccion sanguinea.")
                        
                    }
                }
            break;
            case "3":
                alert("Nuestros medios de contacto: \n\nTel: 4444-4444 \n\ne-mail:clinica@clinica.com \n\nDir: Avenida clinica 2345, CABA \n\nAtencion las 24hs")
                break;
        }
        valorDeMostrarOpcion=mostrarOpcion()
    }
}