function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById("edad").value;

	if (eval(edad) >= 18){

		alert("Eres mayor de edad");

	} else {

		alert("Eres menor de edad");

	}

}//FIN DE LA FUNCIÓN