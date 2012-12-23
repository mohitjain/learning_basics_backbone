var Person = Backbone.Model.extend({
	defaults: {
		name: 'Guest User',
		age: 23,
		occupation: 'Worker'
	},
	work: function() {
		return this.get('name') + ' is working.';
	}
});

