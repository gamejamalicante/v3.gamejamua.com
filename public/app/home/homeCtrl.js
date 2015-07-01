gamejamua.controller('homeCtrl', function($scope, $timeout, $http){

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


	/* GET 4 RANDOM GAMES */
	$http.get('/rest/games?q=4')
		.success(function(data){
			$scope.games = data;
			console.log(data);
		})
		.error(function(data){
			console.log("Error: "+data);
		});


	/* GET 3 NEWS AND ENTRIES */
	$http.get('/rest/news?q=3')
		.success(function(data){
			$scope.news = data;
			console.log(data);
		})
		.error(function(data){
			console.log("Error: "+data);
		});
	


	/*$timeout(function() {
	 $.ajax({ url: 'http://platform.twitter.com/widgets.js', dataType: 'script', cache:true});
	}, 1000);*/

});