/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var uno = parseInt(document.getElementById("PrecioUno").value);
	var dos = parseInt(document.getElementById("PrecioDos").value);
	var tres = parseInt(document.getElementById("PrecioTres").value);

	var total = uno + dos + tres;

	alert("La suma es " + total);
}


function Promedio () 
{
	var uno = parseInt(document.getElementById("PrecioUno").value);
	var dos = parseInt(document.getElementById("PrecioDos").value);
	var tres = parseInt(document.getElementById("PrecioTres").value);

	var total = (uno + dos + tres) / 3;

	alert("El promedio es " + total);
}


function PrecioFinal () 
{
	var uno = parseInt(document.getElementById("PrecioUno").value);
	var dos = parseInt(document.getElementById("PrecioDos").value);
	var tres = parseInt(document.getElementById("PrecioTres").value);

	var total = (uno + dos + tres) * 1.21;

	alert("El promedio es " + total);
}