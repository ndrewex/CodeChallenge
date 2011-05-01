var MySQLRealEscapeStringModule = require('./node_modules/mysql_real_escape_string');
try
{
	// Getting user input from commandline 
	   var stringToClean = process.argv[2];
	
	// Sample hardcoded variable use for testing
	//   var stringToClean = "SELECT lastname, firstname " 
			        + "FROM employee, location "
				+ "WHERE employees.planet = locations.planet"
				+ "AND locations.location  = '''MARS';"
				 

	// Cleaning the string by executing mysql_real_escape_string function 
	var sanitizedString = MySQLRealEscapeStringModule.mysql_real_escape_string(stringToClean);
	
	if(sanitizedString.length != 0)
	{	
		console.log('Here is the unsanitize string: ' + stringToClean + "\n");
		console.log('Here is the sanitized string: ' + sanitizedString);
	}  
}
catch(err) 
{ 	
	console.log('\nusage:')
	console.log('      node sanitize_string.js \"input string to process\"\n');
}

