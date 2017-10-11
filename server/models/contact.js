var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

const match = [	
/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, "Invalid email address"]

var ContactSchema = new Schema({
	first_name: {type: String, required:[true, "You must provide a first name"], minlength: [2, "Your name is too short to be a name"] },
	last_name: {type: String, required:[true, "You must provide a last name"], minlength: [2, "Your name is too short to be a name"] },
	email: {type: String},
	phone: {type: String},
	gender: {type: String},
	dob: {type: Date},
	country: {type: String},
	state: {type: String},
	city: {type: String},	
	user_id: {type: String},
	image_url: {type: String}

})
mongoose.model("Contact", ContactSchema);
