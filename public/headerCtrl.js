gamejamua.controller('headerCtrl', function($scope){	

	/* IS THERE A GAMEJAM? */
	$scope.ingamejam = true;

	/* ESTÁ LOGUEADO? */
	$scope.logged = false;

	/* YA ESTÁ INSCRITO? */
	$scope.inscrito = false;

	$scope.showAccess = function(event){
		var accesdiv = document.getElementById("access");
		accesdiv.classList.toggle("visible");

		var icon = document.getElementById("lockicon");
		icon.classList.toggle("fa-lock");
		icon.classList.toggle("fa-close");
	}

});