var cadena1 = "Hola";
var cadena2 = "ola";
var cadena3 = "DEMAR";

function infoTexto(texto) {
    var uppercase = false;
    var lowercase = false;
    for (let index = 0; index <texto.length; index++) {
        const element = texto[index];
        
        if (element == element.toUpperCase()) {
            uppercase = true;
        } else {
            lowercase = true;
        }

        if (uppercase && lowercase) {
            return "Es una mezcla";
        }

    }

    if (uppercase) {
        return "Son todas mayusculas";
    } else  {
        return "Son todas minusculas";
    }

}

console.log(infoTexto(cadena1));
console.log(infoTexto(cadena2));
console.log(infoTexto(cadena3));