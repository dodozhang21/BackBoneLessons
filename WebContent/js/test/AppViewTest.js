(function(){

	var addFriend, newFriend, friendsList;
	
	var appview = new AppView;
	
	beforeEach(function() {
		jasmine.getFixtures().set('<input id="new-friend" /><button id="add-friend">Add Friend</button><ul id="friends-list" />');
		
		addFriend = $('#add-friend');
		newFriend = $('#new-friend');
		friendsList = $('#friends-list');

	});
	
	describe("click on add friend button", function() {
		
		beforeEach(function() {
			$(newFriend).val('new friend test');
			var click = $.Event('click');
			$(addFriend).trigger( click );
		});
		
		
		it('should add one friend', function(){
		  expect($(friendsList).html()).toEqual("<li>new friend test</li>");
		});
		
	});

})();
