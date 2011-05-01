var SanitizeStringModule = require('./node_modules/mysql_real_escape_string');
try
{
	var stringToSanitize = process.argv[2];
	var strSanitized = SanitizeStringModule.mysql_real_escape_string(stringToSanitize);
	if(strSanitized.length != 0)
	{	
		console.log('Here is the unsanitize string: ' 
			    + stringToSanitize);
		console.log('Here is the sanitized string: ' + stringToSanitize);
	}  
}
catch(err) 
{ 	
	console.log('\nusage:')
	console.log('      node sanitize_string.js \"input string to process\"\n');
}

