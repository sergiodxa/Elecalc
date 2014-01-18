angular.module('elecalc', ['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/continua', {
				templateUrl: 'app/view/continua.html',
				controller : continuaController
			})
			.when('/alterna', {
				templateUrl: 'app/view/alterna.html',
				controller : alternaController
			})
			.when('/', {
				templateUrl: 'app/view/inicia.html',
				controller : iniciaController
			})
			.when('/inicia', {
				redirectTo : '/'
			})
			.otherwise({
				templateUrl: 'app/view/error.html'
			});
	}]);

$(document).on('ready', function() {
	if ($('html').hasClass('localstorage')) {

		if (!localStorage.seccion) {
			localStorage.seccion = 'inicia';
		} else {
			$('#'+localStorage.seccion).prop('checked', true);
			$('#'+localStorage.seccion).parent().addClass('activo');
		}

		window.location = '#/'+localStorage.seccion;

		$('input[name=seccion]').on('click', function() {
			var seccion = $(this).val();
			$('input[name=seccion]').parent().removeClass('activo');
			$(this).parent().addClass('activo');
			window.location = '#/'+seccion;
		});

		$('#abrirConfig,#cerrarConfig').on('click', function(){$('#config,#shadow').toggleClass('activo');});

		$('#btnGuardar').on('click', function() {
			localStorage.seccion = $('input[name=seccion]:checked').val();
			$('#cerrarConfig').trigger('click');
			window.location = '#/'+localStorage.seccion;
		});

		$('#shadow').on('click',function() {
			$('#cerrarConfig').trigger('click');
		});

	}

	else {
		$('#navegadorAntiguo').css('display','block');
	}

});

var	raiz3 = Math.sqrt(3); // raíz cuadrada de tres para corriente trifásica