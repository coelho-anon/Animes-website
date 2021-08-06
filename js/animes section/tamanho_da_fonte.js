function tamanho_da_fonte (argument) {
	if (argument == 0.8) {
		document.getElementById('zetsu').style.fontSize = '0.8em'

		document.getElementsByClassName('font_tamanho')[0].style.display = ''
		document.getElementsByClassName('font_tamanho')[1].style.display = ''
		document.getElementsByClassName('font_tamanho')[2].style.display = ''

		document.getElementsByClassName('font_tamanho')[0].style.margin = ''
		document.getElementsByClassName('font_tamanho')[1].style.margin = ''
		document.getElementsByClassName('font_tamanho')[2].style.margin = ''

		document.getElementById('procurar').style.width = '14%';
		document.getElementById('procurar').style.marginLeft = '31%'

		document.getElementById('entrada').style.marginLeft = '3%'

		document.getElementById('caixa_search').style.left = '53%'
		document.getElementById('caixa_search').style.top = '53.4%'
		document.getElementById('caixa_search').style.width = '27.5%'
	}

	if (argument == 1) {
		document.getElementById('zetsu').style.fontSize = '1em'

		document.getElementsByClassName('font_tamanho')[0].style.display = ''
		document.getElementsByClassName('font_tamanho')[1].style.display = ''
		document.getElementsByClassName('font_tamanho')[2].style.display = ''

		document.getElementsByClassName('font_tamanho')[0].style.margin = ''
		document.getElementsByClassName('font_tamanho')[1].style.margin = ''
		document.getElementsByClassName('font_tamanho')[2].style.margin = ''

		document.getElementById('procurar').style.width = '14%';
		document.getElementById('procurar').style.marginLeft = '31%'

		document.getElementById('entrada').style.marginLeft = '3%'

		document.getElementById('caixa_search').style.left = '53%'
		document.getElementById('caixa_search').style.top = '55.4%'
		document.getElementById('caixa_search').style.width = '27.5%'
	}

	if (argument == 1.2) {
		document.getElementById('zetsu').style.fontSize = '1.2em'
		document.getElementsByClassName('font_tamanho')[0].style.display = 'block'
		document.getElementsByClassName('font_tamanho')[1].style.display = 'block'
		document.getElementsByClassName('font_tamanho')[2].style.display = 'block'

		document.getElementsByClassName('font_tamanho')[0].style.margin = '1%'
		document.getElementsByClassName('font_tamanho')[1].style.margin = '1%'
		document.getElementsByClassName('font_tamanho')[2].style.margin = '1%'

		document.getElementById('procurar').style.width = '16%';
		document.getElementById('procurar').style.marginLeft = '29%'

		document.getElementById('entrada').style.marginLeft = '1%'

		document.getElementById('caixa_search').style.left = '51%'
		document.getElementById('caixa_search').style.top = '56.5%'
		document.getElementById('caixa_search').style.width = '28%'

		for (var i = 0; i < idCaixaEncontrados.length; i++) {
			document.getElementById('assistir_online' + i).style.fontSize = '2.5em'
			document.getElementById('btnBaixar' + i).style.fontSize = '2.5em'
		}
	}
}