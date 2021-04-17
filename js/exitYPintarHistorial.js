function salir() {

    btnSalir.addEventListener('click', function() {
        alert("El número total de \n monedas es: " + cantidadDeMonedas);
        location.reload();
    })
}

//Esta función la incluyo en la función puntaje
function pintarHistorial() {
    let nuevoLi = document.createElement("li"); //Creo el elemento li
    let textoLi = document.createTextNode(("Gana : " + caseImg.toString() + " monedas y pierde una moneda"));
    nuevoLi.appendChild(textoLi); //Agrego el texto al li
    history.appendChild(nuevoLi); //Agrego a la lista history que capturé en app.js el nuevo li
}