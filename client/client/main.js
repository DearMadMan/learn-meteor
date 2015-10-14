Meteor.startup(function(){
	Tracker.autorun(function(){
		// Computations 
		console.log('There are ' + Posts.find().count() + ' posts'); 
	});
});