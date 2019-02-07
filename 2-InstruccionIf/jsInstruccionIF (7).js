function Mostrar()
{
//tomo la edad  

	
	var edad = document.getElementById("edad").value;
	var op = document.getElementById("estadoCivil").value;

	if (eval(edad) <= 18){

		switch(op)
    	{
      		case "Casado":
        		alert("Es muy pequeño para NO ser soltero");
      		break;
      		case "Divorciado":
        		alert("Es muy pequeño para NO ser soltero");
      		break;
      	}
	} 

}//FIN DE LA FUNCIÓN