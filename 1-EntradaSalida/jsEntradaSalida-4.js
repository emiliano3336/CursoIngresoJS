/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var Nombre;
	Nombre=prompt("Nombre..");
	document.getElementById('FormIngreso').value=Nombre;
}

