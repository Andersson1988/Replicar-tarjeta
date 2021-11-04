function clonar(){
	var c = document.getElementById("tarjeta");
	var clon = c.cloneNode(true);
	document.body.appendChild(clon);
  }