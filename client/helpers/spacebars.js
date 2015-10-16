UI.registerHelper('pluralize',function(n,thing){
	// fairly stupid pluralize
	if(n === 1){
		return '1 ' + thing;
	} else{
		return n +' ' + thing +'s';
	}
});