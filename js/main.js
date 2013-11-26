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
		$('article')
			.removeClass('activo')
			.find('div')
				.slideUp();
	}
	else {
		$('article')
			.removeClass('activo')
			.find('div')
				.slideUp();
		$(this)
			.parent()
				.addClass('activo')
				.find('div')
					.slideDown();
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
	var monofasicaContinua = $('#monofasicaContinua'),
		monofasicaAlterna = $('#monofasicaAlterna'),
		trifasica = $('#trifasica');
	if (localStorage.fases == 1 && localStorage.corriente == 1) {
		monofasicaContinua.show();
		monofasicaAlterna.hide();
		trifasica.hide();
	}
	else if (localStorage.fases == 1 && localStorage.corriente == 2) {
		monofasicaContinua.hide();
		monofasicaAlterna.show();
		trifasica.hide();
	}
	else if (localStorage.fases == 2 && localStorage.corriente == 1) {
		monofasicaContinua.hide();
		monofasicaAlterna.hide();
		trifasica.show();
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
	else if (calculo==4) {
		var resistencia = parseFloat($('#campo25').val()),
			intensidad = parseFloat($('#campo26').val()),
			cosPhi = parseFloat($('#campo27').val()),
			resultado = $('#resultado13');
		resultado.val((resistencia*intensidad)/cosPhi+'V');
	}
	else if (calculo==5) {
		var potenciaActiva = parseFloat($('#campo28').val()),
			intensidad = parseFloat($('#campo29').val()),
			cosPhi = parseFloat($('#campo30').val()),
			resultado = $('#resultado14');
		resultado.val(potenciaActiva/(intensidad*cosPhi)+'V');
	}
	else if (calculo==6) {
		var potenciaAparente = parseFloat($('#campo31').val()),
			intensidad = parseFloat($('#campo32').val()),
			resultado = $('#resultado15');
		resultado.val(potenciaAparente/intensidad+'V');
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
	else if (calculo==4) {
		var tension = parseFloat($('#campo33').val()),
			cosPhi = parseFloat($('#campo34').val()),
			intensidad = parseFloat($('#campo35').val()),
			resultado = $('#resultado16');
		resultado.val((tension*cosPhi)/intensidad+'Ω');
	}
	else if (calculo==5) {
		var tension = parseFloat($('#campo36').val()),
			cosPhi = parseFloat($('#campo37').val()),
			potenciaActiva = parseFloat($('#campo38').val()),
			resultado = $('#resultado17');
		resultado.val(Math.pow((tension*cosPhi),2) / potenciaActiva+'Ω');
	}
	else if (calculo==6) {
		var potenciaAparente = parseFloat($('#campo39').val()),
			cosPhi = parseFloat($('#campo40').val()),
			intensidad = parseFloat($('#campo41').val()),
			resultado = $('#resultado18');
		resultado.val((potenciaAparente*cosPhi)/Math.pow(intensidad,2)+'Ω');
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
	else if (calculo==4) {
		var potenciaAparente = parseFloat($('#campo42').val()),
			tension = parseFloat($('#campo43').val()),
			resultado = $('#resultado19');
		resultado.val(potenciaAparente/tension+'A');
	}
	else if (calculo==5) {
		var potenciaActiva = parseFloat($('#campo44').val()),
			tension = parseFloat($('#campo45').val()),
			cosPhi = parseFloat($('#campo46').val()),
			resultado = $('#resultado20');
		resultado.val(potenciaActiva/(tension*cosPhi)+'A');
	}
	else if (calculo==6) {
		var tension = parseFloat($('#campo47').val()),
			cosPhi = parseFloat($('#campo48').val()),
			resistencia = parseFloat($('#campo49').val()),
			resultado = $('#resultado21');
		resultado.val((tension*cosPhi)/resistencia+'A');
	}
}
var potenciaActiva = function(calculo) {
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
	else if (calculo==4) {
		var potenciaAparente = parseFloat($('#campo50').val()),
			cosPhi = parseFloat($('#campo51').val()),
			resultado = $('#resultado22');
		resultado.val(potenciaAparente*cosPhi+'W');
	}
	else if (calculo==5) {
		var tension = parseFloat($('#campo52').val()),
			cosPhi = parseFloat($('#campo53').val()),
			resistencia = parseFloat($('#campo54').val()),
			resultado = $('#resultado23');
		resultado.val(Math.pow((tension*cosPhi),2)/resistencia+'W');
	}
	else if (calculo==6) {
		var tension = parseFloat($('#campo55').val()),
			intensidad = parseFloat($('#campo56').val()),
			cosPhi = parseFloat($('#campo57').val()),
			resultado = $('#resultado24');
		resultado.val(tension*intensidad*cosPhi+'W');
	}
}
var potenciaAparente = function(calculo) {
	if (calculo==1) {
		var potenciaActiva = parseFloat($('#campo58').val()),
			cosPhi = parseFloat($('#campo59').val()),
			resultado = $('#resultado25');
		resultado.val(potenciaActiva/cosPhi+'VA');
	}
	else if (calculo==2) {
		var tension = parseFloat($('#campo60').val()),
			intensidad = parseFloat($('#campo61').val()),
			resultado = $('#resultado26');
		resultado.val(tension*intensidad+'VA');
	}
	else if (calculo==3) {
		var intensidad = parseFloat($('#campo62').val()),
			resistencia = parseFloat($('#campo63').val()),
			cosPhi = parseFloat($('#campo64').val()),
			resultado = $('#resultado27');
		resultado.val((Math.pow(intensidad,2)*resistencia)/cosPhi+'VA');
	}
}
var cosPhi = function(calculo) {
	if (calculo==1) {
		var potenciaActiva = parseFloat($('#campo65').val()),
			tension = parseFloat($('#campo66').val()),
			intensidad = parseFloat($('#campo67').val()),
			resultado = $('#resultado28');
		resultado.val(potenciaActiva/(tension*intensidad));
	}
	else if (calculo==2) {
		var potenciaActiva = parseFloat($('#campo68').val()),
			potenciaAparente = parseFloat($('#campo69').val()),
			resultado = $('#resultado29');
		resultado.val(potenciaActiva/potenciaAparente);
	}
	else if (calculo==3) {
		var intensidad = parseFloat($('#campo70').val()),
			resistencia = parseFloat($('#campo71').val()),
			potenciaAparente = parseFloat($('#campo72').val()),
			resultado = $('#resultado30');
		resultado.val((Math.pow(intensidad,2)*resistencia)/potenciaAparente);
	}
}