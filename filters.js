(function(){

	var app = angular.module('filters',[]);

	app.run(function($rootScope) {

		/* This function recieves the birthday date and returns the age of the person.
		*/
        $rootScope.calculateAge = function(dateString) {
			// birthday is a date
    		var birthday = +new Date(dateString);
  			return~~ ((Date.now() - birthday) / (31557600000));
        };


        /*Given a birthday date it will return the color for the row
			
			0: no color for the row
			danger: the row will have the red color
			warning: the row will have the yellow color

        */
        $rootScope.setColor = function(dateString) {

			// birthday is a date
			var today=new Date(); //Initializes the current Date

			var string_date = dateString.split("-");

			var string_month = parseInt(string_date[1])-1; // It contains the month of the given birthday date
			var string_day = parseInt(string_date[2]); //It contains the day of the given birthday date

    		var birthday=new Date(today.getFullYear(),string_month,string_day);	//The year parameter will be the current year

    		var color = 0; //Without color

  			var diff = Math.floor(birthday.getTime()-today.getTime());
		    var day = 1000 * 60 * 60 * 24;

		    var days = Math.floor(diff/day);
		    var months = Math.floor(days/31);

		    //It selects the color depending on the difference of days between the given date and the current date(Today)

		    if(months==0 || months ==1){
		    	if(days>=0 && days < 16){
		    		color="danger";	//Red Color
		    	}
		    	else if(days>=16 && days < 31){
		    		color="warning";	//Yellow Color
		    	}
		    }

  			return color;
        };
    });


})();