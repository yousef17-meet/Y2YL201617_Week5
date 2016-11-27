///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES

	var temperature = 98.6;
	temperature += 5;
	temperature = temperature*3;
	temperature = temperature/20;
	console.log (temperature);





///2. DATA STRUCTURES
	  var Days_of_the_Week = ["Sunday", "Monday", 'Tuseday' , 'Wednesday' , 'Thursday' , "Friday" , "Saturday"];

	  Days_of_the_Week[0] = "Domingo";
	  Days_of_the_Week[1] = "unes";
	  Days_of_the_Week[2] = "martes";
	  Days_of_the_Week[3] = "miercoles";
	  Days_of_the_Week[4] = "jueves";
	  Days_of_the_Week[5] = "viernes";
	  Days_of_the_Week[6] = "sabado";

	  Days_of_the_Week.push(0);

	  val iceCream = {"Vanila": '$3.00', "Chocolate": '$2.29', 'StrawBerry': '$2.25'};

	  iceCream["Chocolate"] = '$0.99';

	  iceCream["Pistachio"] = '$4.20';

	  delete iceCream["StrawBerry"];


///3. FUNCTIONS & CONDITIONAL STATEMENTS

	function DoIHaveToGoToSchoolToday(index){
		 var Days = ["Sunday", "Monday", 'Tuseday' , 'Wednesday' , 'Thursday' , "Friday" , "Saturday"];
		if(index == 1 || index == 2 || index == 3 || index == 4 || index == 5){
			return "Hey sunshine! wake up! today is, " + Days[index] + " you have to go to school !";
		}

		else{
			return "Whats Cooking, Good Looking? go back to sleep, becouse today is " + Days[index];
		}
	

	}

///4.  LOOPS

	var price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52];

	for(var i = 0; i<price_of_Gasoline.length; i++){
		console.log(i);
		console.log(price_of_Gasoline[i] * 40);

	}


