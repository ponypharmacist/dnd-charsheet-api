/**
 * Database Configuration
 *
 * 	Host: Heroku mLab
 * 	Database Type: MongoDB
 * 	Database Name: heroku_jwprwsr5
 * 	User: renanlopes
 * 	Password: renanlopescoder
 *
 *  Configuration of local database
 * 		mongoose.connect('mongodb://localhost/databaseName');
 */

	let mongoose = require('mongoose');

	mongoose.Promise = global.Promise;
	// mongoose.connect('mongodb://evilglen:1366613glen@ds161700.mlab.com:61700/heroku_91pxqgkn', { useMongoClient: true });
	// mongoose.connect('mongodb+srv://evilglen:1366613glen@dnd-dpurh.mongodb.net/test?retryWrites=true', { useMongoClient: true });
	mongoose.connect('mongodb://evilglen:1366613glen@dnd-shard-00-00-dpurh.mongodb.net:27017,dnd-shard-00-01-dpurh.mongodb.net:27017,dnd-shard-00-02-dpurh.mongodb.net:27017/test?ssl=true&replicaSet=dnd-shard-0&authSource=admin&retryWrites=true', { useMongoClient: true });

// Function to print in console if the database connection was a success
	mongoose.connection.on('connected', function(){
		console.log('Connected to MongoDB');
	});

// Avoiding close the application if not get the connection
	mongoose.connection.on('error', function(error){
		console.log('Connection Error: ' + error);
	});

// Avoiding close the application if lost connection
	mongoose.connection.on('disconnected', function(){
		console.log('Disconnected from MongoDB');
	});

// Accessing the process to ensure close the database connection when the application finish
	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Connection closed by application');
			process.exit(0);
		});
	});
