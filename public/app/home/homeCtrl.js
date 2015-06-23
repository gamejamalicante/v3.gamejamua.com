gamejamua.controller('homeCtrl', function($scope, $timeout){

	/* GET STEPS */
	var steps = [
		{
			title: 'Crea tu equipo',
			content: 'Puedes unirte a 3 personas más para crear juntos un videojuego o un juego de mesa. ¡Revisa los equipos ya creados y envía invitaciones a montones!',
			img: '/static/assets/images/equipo.jpg'
		},
		{
			title: 'Revísate las normas',
			content: 'Es importante ir preparado para la Game Jam UA. Para eso te hemos preparado nuestra gran y aburrida lista de normas que puedes revisar antes del día del evento.',
			img: '/static/assets/images/normas.jpg'
		},
		{
			title: 'Crea tu juego',
			content: 'Y ya por último, ¡sólo queda que tu equipo y tú creeis el juego en nuestra página web para empezar a darle!',
			img: '/static/assets/images/juego.jpg'
		}],
		selected = null,
		previous = null;

	$scope.steps = steps;
	$scope.selectedStep = 0;

	$scope.$watch('selectedStep', function(current, old){
		previous = selected;
		selected = steps[current];
	});

	$scope.removeStep = function(step){
		var index = steps.indexOf(step);
		steps.splice(index, 1);
	}


	/* GET RANDOM GAMES */
	var games = [
		{
			title: 'Crea tu equipo',			
			img: '/static/assets/images/equipo.jpg'
		},
		{
			title: 'Revísate las normas',
			img: '/static/assets/images/normas.jpg'
		},
		{
			title: 'Crea tu juego',
			img: '/static/assets/images/juego.jpg'
		},
		{
			title: 'Crea tu equipo',			
			img: '/static/assets/images/equipo.jpg'
		}];
	$scope.games = games;


	/* GET NEWS AND ENTRIES */
	var news = [
		{
			title: 'Crea tu equipo',			
			date: '15 enero, 2015',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
		},
		{
			title: 'Revísate las normas',
			date: '15 abril, 2014',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscidjksahdguiashdiosajd sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

		},
		{
			title: 'Crea tu juego',
			date: '15 octubre, 2013',
			text: 'Dut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

		}];
	$scope.news = news;

	

});