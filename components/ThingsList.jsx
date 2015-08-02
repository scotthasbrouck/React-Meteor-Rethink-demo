ThingsList = ReactMeteor.createClass({
	templateName: "ThingsList",

	startMeteorSubscriptions: function() {
		Meteor.subscribe("things");
	},

	getMeteorState: function() {
		return { things: Things.find().fetch() };
	},

	renderThing: function(thing) {
		return  (
			<Thing key={ thing._id }
					id={ thing._id }
					name={ thing.name }
					done={ thing.done } />
		);
	},

	render: function() {
		return (
			<div className="row">
				<NewThing />
				<h5 className="center-align section">{ this.state.things.length > 0 ? "Click a thing to do that shit" : "Type a thing in above and hit return" }</h5>
				<ul className="collection">
					{ this.state.things.map(this.renderThing) }
				</ul>
			</div>
		);
	}
});
