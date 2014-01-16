// interface

function cambiarConfig() {
	var continua = $('#seccionContinua'),
		alterna = $('#seccionAlterna'),
		trifasica = $('#seccionTrifasica');
	if (localStorage.seccion == 'continua') {
		continua.show();
		alterna.hide();
		trifasica.hide();
	}
	else if (localStorage.seccion == 'alterna') {
		continua.hide();
		alterna.show();
		trifasica.hide();
	}
	else if (localStorage.seccion == 'trifasica') {
		continua.hide();
		alterna.hide();
		trifasica.show();
	}
};

$(document).on('ready', function() {
	if ($('html').hasClass('localstorage')) {

		if (!localStorage.seccion) {
			localStorage.seccion = 'continua';
		} else {
			$('#'+localStorage.seccion).prop('checked', true);
			$('#'+localStorage.seccion).parent().addClass('activo');
		}

		if (localStorage.nota == 'oculta') {
			$('.nota').css('display','none');
		} else {
			$('.cerrarNota').on('click',function() {
				$('.nota').css('display','none');
				localStorage.nota = 'oculta';
			})
		}

		cambiarConfig();
	}

	else {
		$('#navegadorAntiguo').css('display','block');
	}

	$('article h2').on('click', function() {
		$(this)
			.parent()
				.find('.calculos')
					.addClass('activo');
	});

	$('.calculos h3').on('click', function() {
		$(this)
			.parent()
				.removeClass('activo');
	});

	$('input[name=seccion]').on('click', function() {
		$('input[name=seccion]').parent().removeClass('activo');
		$(this).parent().addClass('activo');
	})

	$('#abrirConfig,#cerrarConfig').on('click', function(){$('#config,#shadow').toggleClass('activo');});

	$('#btnGuardar').on('click', function() {
		localStorage.seccion = $('input[name=seccion]:checked').val();
		$('#cerrarConfig').trigger('click');
		cambiarConfig();
	});

	$('#shadow').on('click',function() {
		$('#cerrarConfig').trigger('click');
	})

});

var raiz3 = Math.sqrt(3); // raíz cuadrada de tres para corriente trifásica