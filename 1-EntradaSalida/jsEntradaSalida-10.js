/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var uno = document.getElementById("importe").value;

	var total = parseInt(uno) * 0.10;

	document.getElementById("resultado").value = total;
}
