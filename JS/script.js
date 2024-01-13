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
        alert (userName + " no es un paciente asociado, te quedan " + i + " intentos");
    }
}