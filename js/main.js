// interface

$(window).on('load', function() {
	if (!localStorage.fases) {
		localStorage.fases = '1';
	}
	if (!localStorage.corriente) {
		localStorage.corriente = '1';
	}
	cambiarConfig();
});

$('article h2').on('click', function() {
	if ($(this).parent().hasClass('activo')) {
		$('article').removeClass('activo');
	}
	else {
		$('article').removeClass('activo');
		$(this).parent().addClass('activo');
	}
});

var showHideConfig = function() {
	var shadow = $('#shadow'),
		config = $('#config');
	config.fadeToggle();
	shadow.fadeToggle();
};

var shadowClick = function() {
	var shadow = $('#shadow'),
		config = $('#config');
	config.fadeOut();
	shadow.fadeOut();
};

var guardarConfig = function() {
	var fases = $('#fases'),
		corriente = $('#corriente');
	localStorage.fases = fases.find(':selected').val();
	localStorage.corriente = corriente.find(':selected').val();
	showHideConfig();
	cambiarConfig();
};

var cambiarConfig = function() {
	var monofasicaContinua	= $('#monofasicaContinua'),
		trifasicaContinua	= $('#trifasicaContinua'),
		monofasicaAlterna	= $('#monofasicaAlterna'),
		trifasicaAlterna	= $('#trifasicaAlterna');
	if (localStorage.fases == 1 && localStorage.corriente == 1) {
		monofasicaContinua.show();
		trifasicaContinua.hide();
		monofasicaAlterna.hide();
		trifasicaAlterna.hide();
	}
	else if (localStorage.fases == 2 && localStorage.corriente == 1) {
		monofasicaContinua.hide();
		trifasicaContinua.show();
		monofasicaAlterna.hide();
		trifasicaAlterna.hide();
	}
	else if (localStorage.fases == 1 && localStorage.corriente == 2) {
		monofasicaContinua.hide();
		trifasicaContinua.hide();
		monofasicaAlterna.show();
		trifasicaAlterna.hide();
	}
	else if (localStorage.fases == 2 && localStorage.corriente == 2) {
		monofasicaContinua.hide();
		trifasicaContinua.hide();
		monofasicaAlterna.hide();
		trifasicaAlterna.show();
	}
};

// cálculos
var tension = function(calculo) {
	if (calculo==1) {
		var potencia = parseFloat($('#campo1').val()),
			resistencia = parseFloat($('#campo2').val()),
			resultado = $('#resultado1'),
			suma;
		suma = potencia + resistencia;
		resultado.val(Math.sqrt(suma)+'V');
	}
	else if (calculo==2) {
		var potencia = parseFloat($('#campo3').val()),
			intensidad = parseFloat($('#campo4').val()),
			resultado = $('#resultado2');
		resultado.val(potencia / intensidad+'V');
	}
	else if (calculo==3) {
		var resistencia = parseFloat($('#campo5').val()),
			intensidad = parseFloat($('#campo6').val()),
			resultado = $('#resultado3');
		resultado.val(resistencia * intensidad+'V');
	}
}
var resistencia = function(calculo) {
	if (calculo==1) {
		var potencia = parseFloat($('#campo7').val()),
			intensidad = parseFloat($('#campo8').val()),
			resultado = $('#resultado4');
		resultado.val(potencia/Math.pow(intensidad,2)+'Ω');
	}
	else if (calculo==2) {
		var tension = parseFloat($('#campo9').val()),
			potencia = parseFloat($('#campo10').val()),
			resultado = $('#resultado5');
		resultado.val(Math.pow(tension,2) / potencia+'Ω');
	}
	else if (calculo==3) {
		var tension = parseFloat($('#campo11').val()),
			intensidad = parseFloat($('#campo12').val()),
			resultado = $('#resultado6');
		resultado.val(tension / intensidad+'Ω');
	}
}
var intensidad = function(calculo) {
	if (calculo==1) {
		var tension = parseFloat($('#campo13').val()),
			resistencia = parseFloat($('#campo14').val()),
			resultado = $('#resultado7');
		resultado.val(tension/resistencia+'A');
	}
	else if (calculo==2) {
		var potencia = parseFloat($('#campo15').val()),
			tension = parseFloat($('#campo16').val()),
			resultado = $('#resultado8');
		resultado.val(potencia/tension+'A');
	}
	else if (calculo==3) {
		var potencia = parseFloat($('#campo17').val()),
			resistencia = parseFloat($('#campo18').val()),
			resultado = $('#resultado9');
		resultado.val(Math.sqrt(potencia/resistencia)+'A');
	}
}
var potencia = function(calculo) {
	if (calculo==1) {
		var tension = parseFloat($('#campo19').val()),
			resistencia = parseFloat($('#campo20').val()),
			resultado = $('#resultado10');
		resultado.val(Math.pow(tension,2)/resistencia+'W');
	}
	else if (calculo==2) {
		var intensidad = parseFloat($('#campo21').val()),
			resistencia = parseFloat($('#campo22').val()),
			resultado = $('#resultado11');
		resultado.val(Math.pow(intensidad,2)/resistencia+'W');
	}
	else if (calculo==3) {
		var tension = parseFloat($('#campo23').val()),
			intensidad = parseFloat($('#campo24').val()),
			resultado = $('#resultado12');
		resultado.val(tension*intensidad+'W');
	}
}