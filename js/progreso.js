// console.log("Barra de progreso cargada");
// window.addEventListener('scroll', function(){
// 	progreso();
// 	ocultarMenu();
// });

// function progreso() {
// 	let scroll = document.documentElement.scrollTop;
// 	let vista = document.documentElement.clientHeight;
// 	let documento = document.documentElement.scrollHeight;
// 	let alto = documento - vista;
// 	let progreso = (scroll / alto) * 100;
// 	let barra = document.querySelector('.barra');
// 	barra.style.width = progreso + "%";

// }
// let ubicacion = window.pageYOffset;
// function ocultarMenu() {
	
// 	let desplazamiento = window.pageYOffset;
// 	if(ubicacion >= desplazamiento) {
// 		document.querySelector('.header').style.top = '0';
// 	} else {
// 		document.querySelector('.header').style.top = '-70px';
// 	}
// 	ubicacion = desplazamiento;
// }