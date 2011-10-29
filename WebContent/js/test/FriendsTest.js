
TestCase('FriendsTest', {

    testAddFunctionCalled : function() {
    	var fakeView = {
    		addFriendLi : function() { }
    	}
    	;
    	sinon.spy(fakeView, "addFriendLi");
    	var friends = new Friends(null, {
			view : fakeView
		});
    	var friend_model = new Friend({
			name : 'haha'
		});
    	friends.add(friend_model);
    	
    	assert(fakeView.addFriendLi.calledOnce);
    }
});
