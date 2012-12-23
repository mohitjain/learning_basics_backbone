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


// View for all people
var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	render: function() {
		this.collection.each(function(person) {
			var personView = new PersonView({ model: person });
			this.$el.append(personView.render().el);
		}, this);

		return this;
	}
});

// The View for a Person
var PersonView = Backbone.View.extend({
	tagName: 'li',


	template: _.template($('#personTemplate').html() ),
	
	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
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

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);

