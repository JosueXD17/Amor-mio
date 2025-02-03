document.getElementById("boton-si").addEventListener("click", function() {
    document.getElementById("boton-si").classList.add("animacion-si");
    setTimeout(function() {
        alert("¡Genial! ¡Eres la mejor!");
    }, 2000);
});

document.getElementById("boton-no").addEventListener("click", function() {
    document.getElementById("boton-no").classList.add("animacion-no");
    setTimeout(function() {
        alert("¡No importa! ¡Te amo de todos modos!");
    }, 2000);
});