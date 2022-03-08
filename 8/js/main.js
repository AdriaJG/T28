var numero1 = 5
var numero2 = 2;

function parOimpar(numero){
    if (numero % 2 == 0) {
        return "Numero par";
    } else {
        return "Numero impar";
    }
}

console.log(parOimpar(numero1));
console.log(parOimpar(numero2));