(function(){
	
	var app = angular.module('main',['filters','components']);

	//This controller fetches the data from the https

	app.controller('dataJSONController',['$http','$scope',function($http,$scope){

		$scope.loaded = false;	//It determines whether the data is loaded or not. False: No, True: Yes

		//The https where it fetches the data for the table
		$http.get('https://script.google.com/macros/s/AKfycbzrnl4RsjevblKaA71SbqQxfL2_lYWezClDLDMZyX4yy2VlEOM_/exec').success(function(data){

			$scope.loaded = true;	//Now the data just loaded

			$scope.product = data.values;	// We assign the data fetched into scope.product



		}).error(function(data,status){
			alert("The info was not loaded, please try it again.");
		});
		
	}]);

	


})();

