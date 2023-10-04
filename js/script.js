var paises = ["España", "Portugal", "Alemania"];

console.log(mostrarElementos(paises));

function mostrarElementos(array) {
    let resultado = "";
    for (var indice of array) {
        resultado += indice + "\n";
    }
    return resultado;
}

function mostrarElementosInvertidos(array){
    
}