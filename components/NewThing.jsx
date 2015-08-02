NewThing = ReactMeteor.createClass({
	templateName: "NewThing",

	addThing: function(e) {
		e.preventDefault();
		Meteor.call("addThing", React.findDOMNode(this.refs.newThing).value.trim());
		React.findDOMNode(this.refs.newThing).value = "";
	},

	render: function() {
		return (
			<form className="row" onSubmit={ this.addThing }>
				<div className="input-field">
					<input ref="newThing" id="new-thing-input" type="text"></input>
					<label htmlFor="new-thing-input">New thing</label>
				</div>
			</form>
		);
	}
});
