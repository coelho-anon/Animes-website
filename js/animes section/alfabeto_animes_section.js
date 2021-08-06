

var alfabeto = ['#','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ]

caixa_principal = document.getElementById('caixa_Principal_animes')
id_alfabeto = [null]
for (var i = 0; i < alfabeto.length; i++) {
	var alfabeto_btn = document.createElement('button');
	alfabeto_btn.id = 'alfabeto_btn' + i;
	alfabeto_btn.className = 'alfabeto';
	alfabeto_btn.innerHTML = alfabeto[i];
	caixa_principal.appendChild(alfabeto_btn);

	id_alfabeto[i] = document.getElementById('alfabeto_btn' + i)

	//vai salvar a letra do alfabeto que for clicada e será usada
	//nos filtros de categorias + filtro do alfabeto
	var letra_ativa = null
	alfabeto_btn.addEventListener('click', (Mouse_evento) => {

		for (var i = 0; i < id_alfabeto.length; i++) {
			id_alfabeto[i].style.backgroundColor = "black";
		}

		for (var i = 0; i < animesNomeArray.length; i++) {

			Mouse_evento.toElement.style.backgroundColor = "#46e214b3";
			letra_ativa = Mouse_evento.toElement.innerHTML
			
/*
			if(animesNomeArray[i].toUpperCase().charAt(0).indexOf(Mouse_evento.toElement.innerHTML) > -1){

                animes_da_tabela[i].style.display = "";
                episodios_da_tabela[i].style.display = "";
                
            }

            else {
                animes_da_tabela[i].style.display = "none";
                episodios_da_tabela[i].style.display = "none";
            }
*/
		}
			filtrar(Mouse_evento)
	})
}