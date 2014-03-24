var Person = Backbone.Model.extend({
	defaults: {
		name: 'Guest User',
		age: 23,
		occupation: 'worker'
	},

	validate: function(attributes) {
		if ( attributes.age < 0 ) {
			return 'Age must be positive.';
		}

		if ( !attributes.name ) {
			return 'Every person must have a name.';
		}
	},

	work: function() {
		return this.get('name') + ' is working.';
	}
});



// code that you can use to listen errors

//You need to do this to enable validation on set:
//person.set('name',-2,{validate:true});

// Instead of using the error event use the invalid event
// person.on('invalid', function(model,error){
// 	console.log(error); 
// });
