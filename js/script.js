run();

function mostrarArray(paises){
    for (pais of paises)
        console.log(pais+"\n");
    }

    function mostrarArrayInverso(paises){
        paises.reverse().forEach(function(valor){
                                     console.log(valor+"\n")})
    }

    function mostrarArrayOrdenado(paises){
        console.log(paises.sort().join("\n"));
    }
    
    function anadirPaisAlPrincipio(pais, paises){
        paises.unshift(pais);
        console.log(paises.toString());
    }

    function anadirPaisAlFinal(pais, paises){
    paises.push(pais);
    console.log(paises.toString());
    }
    
    function borrarAlComienzo(paises){
        console.log(paises.shift());
    }
    
    function borrarAlFinal(paises){
        console.log(paises.pop());
    }
    
    function run(){
        var misPaises=["Japón", "Italia", "Australia", "Sudáfrica", "India", "Argentina"]
        console.log("**********   mostrarArray   ***********");
        mostrarArray(misPaises);
        console.log("**********   mostrarInverso   ***********");
        mostrarInverso(misPaises);
        console.log("**********   mostrarOrdenado   ***********");
        mostrarOrdenado(misPaises);
        console.log("**********   anadirPaisPrincipio   ***********");
        anadirPaisPrincipio("Canadá", misPaises);
        console.log("**********   anadirPaisFinal   ***********");
        anadirPaisFinal("Grecia", misPaises);
        console.log("**********   borrarComienzo   ***********");
        borrarComienzo(misPaises);
        console.log("**********   borrarFinal   ***********");
        borrarFinal(misPaises);
        }