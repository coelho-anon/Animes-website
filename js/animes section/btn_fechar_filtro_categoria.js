


var btn_filtro_categorias_Array = []

for (var i = 0; i < genero_categorias.length; i++) {
	var btn_categoria = document.createElement('button')
	btn_categoria.innerHTML = genero_categorias[i]
	btn_categoria.className = 'categ_filtro'
	btn_categoria.style.display = 'none'
	document.getElementById('btn_filtro_categorias').appendChild(btn_categoria)

	btn_categoria.onclick  = (param) => {


		if(param.path[0].innerHTML == ' X'){
			param.path[1].style.display = 'none'
			categoria_ativas.splice(categoria_ativas.indexOf(param.path[1].firstChild.data), 1)

		}else{
			param.path[0].style.display = 'none'
			categoria_ativas.splice(categoria_ativas.indexOf(param.path[0].firstChild.data), 1)
		}

		filtrar()

		//console.log(categoria_ativas)
	}

	

	var fechar_btn = document.createElement('span')
	fechar_btn.innerHTML = ' X'
	fechar_btn.className = 'fechar_btn_categ'
	btn_categoria.appendChild(fechar_btn)


}
btn_filtro_categorias_Array = document.getElementsByClassName('categ_filtro');
