

/*
function familia (argument) {
	// body... 
	/*
	for (var i = 0; i < animes_nao_familia.length; i++) {
		alert(animes_nao_familia)
	}
	16 19 35
	
	for (var i = 0; i < animes.length; i++) {
		for (var j = 0; j < animes[j].categorias.length; j++) {
			if (animes[i].categorias[j] == 'ECCHI'
			 || animes[i].categorias[j] == 'SEINEN'
			 || animes[i].categorias[j] == 'THRILLER' 
			 || animes[i].categorias[j] == 'HORROR'
			 || animes[i].categorias[j] == 'DEMÊNCIA') {

				contador = 1;
			}
		}

		if (contador == 1) {
			/*
			alert(animes[i].nome)
			alert(animes[i].categorias)
			alert(i)
			
			animes_nao_familia.push(animes[i]) 
			//animes.splice(i, 1);
		}

		contador = 0;
	}
	
	//tirar um pequeno bug do array (um buraco no indice 0)
	animes_nao_familia.splice(0, 1);
	console.log(animes_nao_familia)
	*/
	//alert(animes[0].categorias[0])
//}








/*
var checkBox = document.getElementById('checkBox')
function familia (argument) {
	if (checkBox.checked) {
		document.getElementById('familiaOff').style.opacity = '.5';
		document.getElementById('f').style.opacity = '1';
		for (var i = 0; i < animes.length; i++) {
			for (var j = 0; j < animes[j].categorias.length; j++) {
				if (animes[i].categorias[j] == 'ECCHI'
				 || animes[i].categorias[j] == 'SEINEN'
				 || animes[i].categorias[j] == 'THRILLER' 
				 || animes[i].categorias[j] == 'HORROR'
				 || animes[i].categorias[j] == 'DEMÊNCIA') {

					contador = 1;
				}
			}

			if (contador == 1) {
				animes_da_tabela[i].style.display = "none";
				episodios_da_tabela[i].style.display = "none";
			}

			contador = 0;
		}
	}

	if(checkBox.checked == false) {
		document.getElementById('familiaOff').style.opacity = '1';
		document.getElementById('f').style.opacity = '.5';
		for (var i = 0; i < animes.length; i++) {
			for (var j = 0; j < animes[j].categorias.length; j++) {
				if (animes[i].categorias[j] == 'ECCHI'
				 || animes[i].categorias[j] == 'SEINEN'
				 || animes[i].categorias[j] == 'THRILLER' 
				 || animes[i].categorias[j] == 'HORROR'
				 || animes[i].categorias[j] == 'DEMÊNCIA') {

					contador = 1;
				}
			}

			if (contador == 1) {
				animes_da_tabela[i].style.display = "";
				episodios_da_tabela[i].style.display = "";
			}

			contador = 0;
		}
	}
}
*/