const hortalizas = ["aguacate", "ajo", "cebolla", "pepino", "puerro", "tomate", "zanahoria"];

//Capturo la selección de monedas del jugador
var monedasInicio = document.getElementById("monedas");
var cantidadDeMonedas = 0;

//Enlazando los botones con JS
const btnMonedasSelected = document.getElementById("monedasSelected");
const btntirar = document.getElementById("tirar");
const btnSalir = document.getElementById("salir");

var selected = false;
//Enlazo el elemento que voy a usar para mostrar laws monedas
var displayMonedas = document.getElementById("contador");

//Enlazando las imágenes con JS
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

//Creo variables para utilizarlas en la función pintoHortalizaAleatoria y puntaje
var srcHortaliza1;
var srcHortaliza2;
var srcHortaliza3;

//Enlazo la lista del historial para irle agregando tiradas
const history = document.getElementById('historialTiradas');
var caseImg = 0;
var tiradas = 0;

seleccionarMonedas();

tirada();

salir();