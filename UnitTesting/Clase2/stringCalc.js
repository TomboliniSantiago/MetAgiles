class StringCalc {
 static sumar(numeros){
    if (!numeros){
        return 0 
    }
    numeros = numeros.replace(/\n/g, ',');
    const numerosSeparados = numeros.split(',').map(Number); // Convierte la cadena en un array de números
    return numerosSeparados.reduce((acc, curr) => acc + curr, 0); // Suma todos los números del array
 }

}

module.exports = StringCalc;