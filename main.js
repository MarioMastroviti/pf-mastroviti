//ingreso de nombre y edad

let nombre = prompt ("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
//Validacion de edad

if(edad>=18){
    alert("Bienvenido a la tienda oficial de TERAPIAS MUYU " + " " + nombre.toUpperCase());
    let seleccion = parseInt(prompt ("Si desea una obtener un turno con TERAPIAS MUYU aprete 1, si desea conocer experiencias ingrese 2 y si desea realizar una compra ingrese 3"));

//agendar un turno

if (seleccion == 1){
    for(let i = 1; i<100; i++){
        alert ("El numero de su turno es el " + i  + " " + nombre);
        break;
        }
}
//conocer experiencias

else if (seleccion == 2){
    let expe = parseInt(prompt("Si desea conocer la experiencia de Ana ingrese 1, si desea conocer la experiencia de juan ingrese 2"));
    if (expe == 1){
        alert("Ana, jugadora de hockey, empezo a usar nuestros productos desde 2015 hasta el dia de hoy, ella cuenta que la ayuda muchisimo sobre todo para los dolores post partidos")
    }
    else if (expe == 2){
        alert("Juan, un jubilado de 78 años que nos conocio por su nieto, asombrado ya que despues de probar tantos tratamientos habia perdido la esperanza y con Muyu encontraba lo que buscaba")
    }
    else {
        alert("Opcion ingresada incorrecta")
    }
    }
    //realizar una compra

    else if (seleccion == 3){
        let producto = prompt(" Si desea comprar nuestro aceite de cbd ingrese 1, si desea comprar el aceite de thc ingrese 2 y si desea comprar el aceite para mascotas ingrese 3 ");

        //control de stock

        if (producto == 1){
            let stock1 =5;
            while(stock1 > 1) {
                alert("Felicitaciones! obtuviste unos de los ultimos " + stock1  + " aceites de cbd");
                stock1--;
                 break;
            }
                     
        }
        else if (producto == 2){
            let stock2 = 5;
            while (stock2 > 1){
                alert("Felicitaciones! obtuviste unos de los ultimos " + stock2 + " aceites de THC");
                stock2--;
                break;
            }
        }
        else if  (producto == 3){
            let stock3 = 5;
            while (stock3 > 1) {
                alert("Felicitaciones! obtuviste unos de los ultimos " + stock3 + " aceites para mascotas");
                stock3--;
                break;
            }
        
            }
            else {
                alert ("Opcion ingresada incorrecta");
            }
            console.log("Muchas gracias por su visita");
            }
            }
//si no es mayor de 18

            else{
                alert("Disculpa " + nombre.toUpperCase + " esta pagina es para mayores de 18 años" )
            }
       

    



