var bodyParser = require('body-parser');
var controller = require('./controller.js');

module.exports = function(app, express) {
	// Middleware
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '/../../public'));

	app.use('/bower_components', express.static(__dirname + '/../../bower_components'));

	// Routes
	// app.get('/', function(req, res) {
	// 	res.sendFile('index.html');
	// });

	// app.route('/success')
	// 	.get(function(req, res) {
	// 		controller.authHost(req, res);
	// 	})
	// 	.post(function(req, res) {
	// 		if (req.body.name) {
	// 			controller.createPlaylist(req, res);
	// 		} else {
	// 			controller.authGuest(req, res);
	// 		}
	// 	})
}
