let arraySignos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis];

let fortuna = true

while(fortuna){
    let mensaje = "Elige tu consulta";
    mensaje += "\n1) Horóscopo del día";
    mensaje += "\n2) Características de cada signo";
    mensaje += "\n3) No me interesa mi fortuna";

    let resp = prompt(mensaje);
    switch (resp) {

        case "1":
            horoscopo();
            break;
        case "2":
            caractericas();
            break;
        case "3":
            alert("Gracias, vuelva prontos");
            fortuna = false;
            break;
        case null:
            alert("Gracias, vuelva prontos");
            fortuna = false;
            break;
        default:
            alert("No ingreso una opcion valida");

    }
}


function horoscopo(){
    let zodiaco = confirm ("Madame LeFortune le da la bienveida a su horóscopo del zodíaco semanal.")
    
    while (zodiaco){
        let signoIngresado = prompt("Ingresá tu signo").toLowerCase();
        alert("Madame LeFortune dice que " + signosZodiaco(signoIngresado));
            if (zodiaco=false){
                fortuna;
            }
    }
}
    function signosZodiaco(signoUser) {
        let horoscopo
        switch (signoUser) {
            case "aries":
                horoscopo = "comerás buen jamón crudo. ";
                break;
            case "tauro":
                horoscopo = "tu inodoro quedará reluciente. ";
                break;
            case "geminis":
                horoscopo = "llamarás a tu mamá. ";
                break;
            case "géminis":
                horoscopo = "llamarás a tu mamá. ";
                break;
            case "cancer":
                horoscopo = "club día te dará un descuento en papas fritas. ";
                break;
            case "cáncer":
                horoscopo = "club día te dará un descuento en papas fritas. ";
                break;
            case "leo":
                horoscopo = "tomarás sol al mediodía. ";
                break;
            case "virgo":
                horoscopo = "te quedarás sin papel higiénico. ";
                break;
            case "libra":
                horoscopo = "ese jean te volverá a entrar. ";
                break;
            case "escorpio":
                horoscopo = "cantarás todo el día una canción de Arjona. ";
                break;
            case "sagitario":
                horoscopo = "tendrás que correr el bondi.";
                break;
            case "capricornio":
                horoscopo = "pisarás caca de perro. ";
                break;
            case "acuario":
                horoscopo = "te caerá mal ese sushi. ";
                break;
            case "piscis":
                horoscopo = "seguirás igual de hippie.";
                break;
            default:
                horoscopo = "eso no es un signo, seguí participando.";
    }
        return horoscopo
}


function caractericas(){
    let mensaje = "Cada signo es disntinto, conocé cómo los ve Madame LeFortune "
    arraySignos.forEach((signoCaracteristicas) => {
    mensaje += "\n " + signoCaracteristicas.mostrar_listado();
    })

    alert(mensaje);

}