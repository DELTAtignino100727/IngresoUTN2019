/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno = document.getElementById("numeroUno").value;

	var dos = document.getElementById("numeroDos").value;

	var total = parseInt(uno) + parseInt(dos);

	alert("La suma es " + total);
}

function restar()
{
	var uno = document.getElementById("numeroUno").value;

	var dos = document.getElementById("numeroDos").value;

	var total = parseInt(uno) - parseInt(dos);

	alert("La resta es " + total);
}

function multiplicar()
{ 
	var uno = document.getElementById("numeroUno").value;

	var dos = document.getElementById("numeroDos").value;

	var total = parseInt(uno) * parseInt(dos);

	alert("La multiplicación es " + total);
}

function dividir()
{
	var uno = document.getElementById("numeroUno").value;

	var dos = document.getElementById("numeroDos").value;

	var total = parseInt(uno) / parseInt(dos);

	alert("La divición es " + total);
}

