Template.header.helpers({
	pageTitle:function(){
		return Session.get('pageTitle') || 'Learn Meteor';
	},
	activeRouteClass: function(){
		var args = Array.prototype.slice.call(arguments,0);
		args.pop();

		var active = _.any(args, function(name){
			return Router.current() && Router.current().route.getName() === name
		});

		return active && 'active';
	}
});