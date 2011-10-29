Friends = Backbone.Collection.extend({
	//This is our Friends collection and holds our Friend models
	initialize : function(models, options) {
		this.bind("add", options.view.addFriendLi);
		//Listen for new additions to the collection and call a view function if so
	}
});