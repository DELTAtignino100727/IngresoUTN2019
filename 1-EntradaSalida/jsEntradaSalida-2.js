/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
	var nombre;

	nombre = prompt("Ingrese nombre");

	document.getElementById('texto').innerHTML = nombre;
}

