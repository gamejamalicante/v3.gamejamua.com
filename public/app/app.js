var gamejamua = angular.module('gamejamua', ['ui.router']);

gamejamua.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "home/main.tpl.html",
	      controller: 'homeCtrl'
	    });

});
