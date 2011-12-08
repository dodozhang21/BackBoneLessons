AppView = Backbone.View.extend({
	el : $("body"),
	initialize : function() {
		this.friends = new Friends(null, {
			view : this
		});
		//Create a friends collection when the view is initialized.
		//Pass it a reference to this view to create a connection between the two
	},
	events : {
		"click #add-friend" : "showPrompt",
	},
	showPrompt : function() {
		var friend_name = $('#new-friend').val();
		var friend_model = new Friend({
			name : friend_name
		});
		//Add a new friend model to our friend collection
		this.friends.add(friend_model);
	},
	addFriendLi : function(model) {
		//The parameter passed is a reference to the model that was added
		$("#friends-list").append("<li>" + model.get('name')+ "</li>");
		//Use .get to receive attributes of the model
	}
});