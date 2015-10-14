Template.header.helpers({
	pageTitle:function(){
		return Session.get('pageTitle') || 'Learn Meteor';
	}
});