/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {

	var largo = parseFloat(document.getElementById("Largo").value);
	var ancho = parseFloat(document.getElementById("Ancho").value);
	var perimetro;
	var alambre;

	perimetro = (largo + ancho) * 2;
	alambre = perimetro * 3;

	alert("Hay que comprar " + alambre.toFixed(2) + "m de alambre");
}


function Circulo () {

	var radio = parseFloat(document.getElementById("Radio").value);
	var alambre;
	var diametro;

	diametro = 2 * Math.PI * radio;
	alambre = diametro * 3;

	alert("Hay que comprar " + alambre.toFixed(2) + "m de alambre");
}


function Materiales () {

	var largo = parseFloat(document.getElementById("Largo").value);
	var ancho = parseFloat(document.getElementById("Ancho").value);
	var superficie;
	var cemento;
	var cal;

	superficie = largo * ancho;
	cemento = suoerficie * 2;
	cal = superficie * 3;

	alert("Hay que comprar " + cemento.toFixed(2) + " bolsas de cemento " + cal.toFixed(2) + " bolsas de cal");

	
}