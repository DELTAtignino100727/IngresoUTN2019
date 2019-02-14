/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahren = parseFloat(document.getElementById("Temperatura").value);
	var celsius;

	celsius = (fahren - 32) * 5 / 9;

	alert(fahren.toFixed(2) + " Fahrenheit son " + celsius.toFixed(2) + " centígrados");
}

function CentigradosFahrenheit () 
{
	var celsius, fahren;
	
	celsius = parseFloat(document.getElementById("Temperatura").value);

	fahren = (celsius * 9 / 5) + 32;

	alert( celsius.toFixed(2) + " centígrados son " + fahren.toFixed(2) + " Fahrenheit");
}
