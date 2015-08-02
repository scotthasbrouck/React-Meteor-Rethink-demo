Things = new Meteor.Collection('things');

if (Meteor.isServer) {
	Meteor.publish("things", function() {
		return Things.find();
	});
}

Meteor.methods({
	addThing: function(thing) {
		Things.insert({
			name: thing,
			done: false,
			createdAt: new Date()
		});
	},

	updateThing: function(thingId, done) {
		Things.update(thingId, { $set: { done: done } });
	},

	deleteThing: function(thingId) {
		Things.remove(thingId);
	}
});