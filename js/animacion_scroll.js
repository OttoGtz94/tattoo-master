window.addEventListener('load', function() {
	console.log("Animaciones Cargadas");

	animacionHeader();
	animacionAcercaDe();
	animacionTrabajos();
	menuProgreso();
});

var an = document.querySelector('#ancho');

function animacionHeader() {
	let menu = document.querySelector('#menu');
	let leyenda = document.querySelector('.leyenda');
	let posicion = menu.getBoundingClientRect().top;
	let pantalla = window.innerHeight;
	if(posicion < 100) {
		menu.style.animation  = 'arrastrarAIzquierda 0.9s ease-out';
		leyenda.style.animation = 'arrastrarADerecha 1s ease-out';

	}
}


function animacionAcercaDe() {
	window.addEventListener('scroll', function(){
		let foto_perfil = document.querySelector('#foto-perfil');
		let redes_sociales = document.querySelector('.redes-sociales');
		let nombre = document.querySelector('.nombre');
		let texto = document.querySelector('.texto');
		let imagen = document.querySelector('.contenedor-imagen');
		let posicion = foto_perfil.getBoundingClientRect().top;
		let pantalla = window.innerHeight/5;

		if(posicion < pantalla) {
			foto_perfil.style.animation  = 'zoom 1s ease-out';
			redes_sociales.style.animation = 'arrastrarADerecha 2s'
			nombre.style.animation = 'arrastrarArriba 1s';
			texto.style.animation = 'arrastrarAIzquierda 1s';
			imagen.style.animation = 'arrastrarADerecha 1s';
		} 
	});
}

function animacionTrabajos() {
	window.addEventListener('scroll', function(){
		let titulo = document.querySelector('.tituloTrabajos');
		let galeria = document.querySelector('.gallery');
		let posicionTitulo = titulo.getBoundingClientRect().top;
		//let posicionImagen = imagen.getBoundingClientRect().top;
		let pantalla = window.innerHeight/4;

		if (posicionTitulo < pantalla) {
			titulo.style.animation = 'zoom 1s';
			galeria.style.animation = 'gallery 2s';
		}
	});
}

function menuProgreso() {
	console.log("Barra de progreso cargada");
	
	var al = document.querySelector('#alto');

	window.addEventListener('scroll', function(){
		progreso();
		ocultarMenu();
	});
	function progreso() {
		let scroll = document.documentElement.scrollTop;
		let vista = document.documentElement.clientHeight;
		let documento = document.documentElement.scrollHeight;
		let alto = documento - vista;
		let progreso = (scroll / alto) * 100;
		let barra = document.querySelector('.barra');
		barra.style.width = progreso + "%";
	}

	let ubicacion = window.pageYOffset;
	function ocultarMenu() {
		
		let desplazamiento = window.pageYOffset;

		if(desplazamiento < 300) {
			document.querySelector('.header').style.top = '-70px';
			if (an <= 360){
				document.querySelector('.header').style.top = '-100px';
			}
		}else {

			if(ubicacion >= desplazamiento) {
				document.querySelector('.header').style.top = '0';
			} else {
				document.querySelector('.header').style.top = '-70px';
				if (an <= 360){
					document.querySelector('.header').style.top = '-100px';
				}
			}
		}
		ubicacion = desplazamiento;
	}
}
