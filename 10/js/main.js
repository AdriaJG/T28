var cadena = "La ruta nos aporto otro paso natural"

function palindromo(cadena) {
    cadena = cadena.replace(/ /g, "");

    for (let index = 0; index < cadena.length / 2; index++) {
        const element = cadena[index];

        if (cadena[index].toUpperCase() == cadena[cadena.length - (index + 1)].toUpperCase()) {
            
        } else {
            return "No es palindromo";
        }

    }
    return "Es palindromo";
}

console.log(palindromo(cadena));