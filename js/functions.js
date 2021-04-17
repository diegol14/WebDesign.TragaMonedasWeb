//Esta funcion me devuelve un aleatorio de 0 a 6 para seleccionar una hortaliza aleatoria del array
function randomHortaliza() {
    do {
        var opcion = false
        let randomHort = (Math.ceil(Math.random() * 10)); //Con el ceil recibo como mínimo un uno y no tengo exceso de ceros con los decimales del random
        console.log("El random es:" + randomHort);

        if (randomHort > 0 && randomHort < 8) { //Acoto las 7 posibilidades del array
            return (randomHort - 1); //Le resto 1 para que me de la posibilidad del 0 que tenemeos en el array
            //Aqui no pongo el cambio de estado de opcion porque el return acaba la ejecución de la función

        }

    } while (!opcion);
}


function pintoHortalizaAleatoria() {

    //selecciono el String del array con el random de la función aleatoria
    srcHortaliza1 = hortalizas[randomHortaliza()];
    //Con la hotaliza seleccionada del array, hacemos que forme parte de la fuente de la imagen
    img1.setAttribute('src', ("./img/" + srcHortaliza1 + ".png"));
    console.log(img1.getAttribute('src'));

    srcHortaliza2 = hortalizas[randomHortaliza()];
    img2.setAttribute('src', ("./img/" + srcHortaliza2 + ".png"));
    console.log(img2.getAttribute('src'));

    srcHortaliza3 = hortalizas[randomHortaliza()];
    img3.setAttribute('src', ("./img/" + srcHortaliza3 + ".png"));
    console.log(img3.getAttribute('src'));

}

function seleccionarMonedas() {

    btnMonedasSelected.addEventListener('click', function() {
        //Cuando se pulsa el botón monedasSelected capturo el numerodel input monedas*  (como string ) y lo convierto a int 
        monedasInicio = document.getElementById("monedas");
        // console.log(selected = true);
        //*Se lo asigno a la variable cantidadMonedas
        cantidadDeMonedas = parseInt(monedasInicio.value);
        console.log("Empiezo con:" + cantidadDeMonedas);
        //Oculto la selección de la cantidad de monedas
        monedasInicio.style.display = "none";
        btnMonedasSelected.style.display = "none";
        //Muestro en un input number de solo lectura la cantidad de monedas
        displayMonedas.setAttribute("value", cantidadDeMonedas);
    })
}

function tirada() {

    btntirar.addEventListener('click', function() {
        //cuando pulso el botón tirar llamo a la funcion pintoHortalizaAleatoria()
        if (cantidadDeMonedas == 0) {
            alert("No tienes monedas");
        } else {
            //Antes que nada resto lo que cuesta una tirada: una moneda
            tiradas += 1;
            cantidadDeMonedas -= 1;
            console.log("antes: " + cantidadDeMonedas)

            pintoHortalizaAleatoria();
            //Después de tirar y pintar las hortalizas contamos el puntaje y sumamos la cantidad de monedas con la función puntaje
            puntaje();
        }
    })
}



function puntaje() {
    caseImg = 0;
    let zanahoria = 0;
    //Construyo un array con las src de las imágenes resultamtes de la tirada
    let arrayResultado = [srcHortaliza1, srcHortaliza2, srcHortaliza3];
    //LO recorro y cuento las zanahorias del caso
    arrayResultado.forEach(element => {

        if (element == "zanahoria") { zanahoria += 1 }

    });

    if (zanahoria != 0) {

        switch (zanahoria) {
            case 1:
                if ((srcHortaliza1 == srcHortaliza2) || (srcHortaliza1 == srcHortaliza3) || (srcHortaliza2 == srcHortaliza3)) {
                    caseImg = 3; // Una zanahoria y 2 hortalizas iguales, 3 monedas
                } else { caseImg = 1; } // Sólo una zanahoria, una moneda

                break;
            case 2:
                caseImg = 4; // Si hay 2 zanahorias 4 monedas

                break;
            case 3:
                caseImg = 10; // Si hay 3 zanahorias 10 monedas

                break;
            default:
                break;
        }
    } else if ((srcHortaliza1 == srcHortaliza2) && (srcHortaliza1 == srcHortaliza3)) {
        caseImg = 5; // Si son 3 iguales que no sean zanahorias

    } else if ((srcHortaliza1 == srcHortaliza2) || (srcHortaliza1 == srcHortaliza3) || (srcHortaliza2 == srcHortaliza3)) {
        //Si son 2 iguales sin zanahoria porque eso ya lo evalué , 2 monedas
        caseImg = 2;
    }

    cantidadDeMonedas += caseImg;
    console.log("Cantidad de monedas: " + cantidadDeMonedas);
    displayMonedas.setAttribute("value", cantidadDeMonedas);
    //Esta función esta en el archivo exityPintarHistorial
    pintarHistorial();


} // End function puntaje