gamejamua.controller('headerCtrl', function($scope){	

	$scope.showAccess = function(event){
		var accesdiv = document.getElementById("access");
		accesdiv.classList.toggle("visible");

		var icon = document.getElementById("lockicon");
		icon.classList.toggle("fa-lock");
		icon.classList.toggle("fa-close");
	}

});