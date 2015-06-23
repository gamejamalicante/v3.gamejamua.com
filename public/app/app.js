var gamejamua = angular.module('gamejamua', ['ui.router', 'ngMaterial']);

gamejamua.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	var static_path ="static/app";

	$urlRouterProvider.otherwise("/home");

	$stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: static_path+"/home/main.tpl.html",
	      controller: 'homeCtrl'
	    });




});
