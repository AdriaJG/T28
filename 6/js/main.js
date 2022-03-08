var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var DNI = 12345678;
var letraDNI = 'P';

if (DNI >= 0 && DNI < 99999999) {
    if (letras[DNI % 23] == letraDNI) {
        console.log("La letra y el DNI son correctos");
    } else {
        console.log("La letra del DNI no es correcta");
    }
} else {
    console.log("Numero incorrecto");
}
