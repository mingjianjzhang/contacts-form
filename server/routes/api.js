const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png')
  }
})
var upload = multer({ storage: storage })

router.post('/images', upload.single('image'), (req, res) => {
	console.log("about to print some nice files".green)
	console.log(req.files);
	console.log("about to print some nice single file".green)
	console.log(req.file);
	console.log("about to print some nice req.body".green)
	console.log(req.body);
})

router.post('/contacts', (req, res) => {
	const newContact = new Contact(req.body);
	newContact.save((err, contact) => {
		if (err) {
			res.json(err);
		} else {
			res.json(contact);
		}
	})
});

router.get('/contacts/:user_id', (req, res) => {
	console.log(req.params.user_id);
	console.log("here's the parameter id");
	Contact
		.find({user_id: req.params.user_id})
		.exec((err, contacts) => {
			res.json(contacts);
		})
});

router.post('/login', (req, res) => {
	console.log(req.body)
	console.log("here's what's entering the login".green);
	console.log(req.session, "here's the current session".green);
	req.session.user = {
		id: req.body.user_id
	} 
	console.log(req.session.user, "was i ever set as a user??")
	res.sendStatus(200);
})

router.get("/current_user", (req, res) => {
	console.log(req.session.user, "user_id please show")
	res.json(req.session.user.id);
})

module.exports = router;
