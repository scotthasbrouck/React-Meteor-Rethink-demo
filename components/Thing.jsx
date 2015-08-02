Thing = ReactMeteor.createClass({
	templateName: "Thing",

	updateThing: function() {
		Meteor.call("updateThing", this.props.id, !this.props.done);
	},

	deleteThing: function() {
		Meteor.call("deleteThing", this.props.id);
	},

	componentDidMount: function() {
		this.activateMaterializeTooltips();
	},

	componentDidUpdate: function() {
		this.activateMaterializeTooltips();
	},

	activateMaterializeTooltips: function() {
		$('.tooltipped').tooltip({delay: 25});
	},

	render: function() {
		return (
			<li onClick={ this.updateThing } className={ "collection-item truncate" + (this.props.done ? " active" : "") }>
				{ this.props.done ? <i className="fa fa-check"></i> : "" }
				{ " " + this.props.name }
				{ this.props.done ? <i onClick={ this.deleteThing } className="fa fa-trash-o right tooltipped" data-tooltip="Delete this thing!"></i> : "" }
			</li>
		);
	}
});
