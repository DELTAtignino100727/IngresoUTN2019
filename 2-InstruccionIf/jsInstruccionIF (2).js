function Mostrar()
{
//tomo la edad  

	var edad = document.getElementById("edad").value;

	if (eval(edad) >= 18){

		alert("Eres mayor de edad");

	} else {

		if (eval(edad) >= 12) {

			alert("Eres un adolescente");

		} else {

			alert("Eres un niño");

		}
	}
		


}//FIN DE LA FUNCIÓN