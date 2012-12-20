// Person Model
var Person = Backbone.Model.extend({
	defaults: {
		name: 'Guest User',
		age: 30,
		occupation: 'worker'
	}
});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

// The View for a Person
var PersonView = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#personTemplate').html() ),

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
	}
});

var peopleCollection = new PeopleCollection([
	{
		name: 'Mohit Jain',
		age: 26
	},
	{
		name: 'Taroon Tyagi',
		age: 25,
		occupation: 'web designer'
	},
	{
		name: 'Rahul Narang',
		age: 26,
		occupation: 'Java Developer'
	}
]);


