var MyFunctionModule = require('./node_modules/myFunction');
try
{
	// Getting user input from commandline 
	var stringToClean = process.argv[2];		

	// Sample hardcoded variable use for testing
	// var stringToClean = 'ABC123ABC123ABC123ABC123ABC123ABC123';

	if(stringToClean.length != 0)
	{	
	    // Cleaning the string by executing mysql_real_escape_string function()
            var sanitizedString = MyFunctionModule.myFunction(stringToClean);
	    
            console.log('Input code : ' + stringToClean);
	    console.log('Here is SQL Statement with sanitized string: '); 
	    console.log('	' + sanitizedString);
	}
}
catch(err) 
{ 		
<<<<<<< HEAD
	if(err.message == "Cannot read property 'length' of undefined")
	    console.log("Usage: code_search 'input code here'");
=======
	if(err.message == "Cannot read property \'length\' of undefined")
	    console.log("Usage: code_search \'input code here\'");
>>>>>>> 4602c48cc2ed3f1d42bf433a95861085e2ac82cc
	else
	    console.log(err.message);
}
