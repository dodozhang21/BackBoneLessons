
TestCase('FriendTest', {

    testName : function() {
    	var friend_model = new Friend({
			name : 'friend'
		});
        assertEquals('Should have name friend', 'friend', friend_model.get('name'));
    }
});
