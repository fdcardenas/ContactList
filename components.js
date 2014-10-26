
(function(){
	var app = angular.module('components',[]);


		//This directive is to call the loader bar.

		app.directive('loader', function() {
		    return {
		    	restrict:'E',
		      	templateUrl:'loader.html'
		    };
		});

		//This directive is to call the table with the contacts list.

		app.directive('list', function() {
		    return {
		    	restrict:'E',
		      	templateUrl:'list.html',
		      	controller: function($scope){

				    $scope.orderByField = 'name.v';	//It has the sorting field selected. It initializes with name.v

					$scope.reverseSort = false;	//It determines whether the sorting is ASC or DESC

					//It changes the value of the selected field for the sorting and the value to decide either the sorting is ASC or DESC
		  			$scope.selectField = function(setField){
		  				$scope.orderByField = setField;
		  				$scope.reverseSort = !$scope.reverseSort;
		  			};

		      	}
		    };
		});
	
})();
