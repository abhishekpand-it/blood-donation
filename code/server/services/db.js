var mongo = require('mongodb'),
	client = mongo.MongoClient;

exports.connect = function (callback) {
	if (mongo.DB) {
		return mongo.DB;
	} else {
		//console.log("PRINT VAR");
		console.log(process.env.npm_package_config_db);
		//const url = process.env.npm_package_config_db || process.env.MONGOLAB_URI || process.env.DB;
		const url = "mongodb://cyberlord92:overover123@ds157667.mlab.com:57667/blood-donation-management";
		if (!url)  {
			console.error('No database url specified. Use env DB, or package.json.');
			process.exit(1);
		}
		
		client.connect(url, function (err, db) {
			if (err) {
				console.error('Problem with MongoDB');
				console.error(err);
				process.exit(1);
			} else {
				mongo.DB = db;
				if (callback) {
					callback(db);
				}
			}
		});
	}
};