var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');

exports.handleRequest = function (req, res) {
	if (req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'text/html'});

		fs.readFile(archive.paths.siteAssets + '/index.html', function(err, data) {
			if (err) {
				res.writeHead(404);
			} else {
				res.write(data);
				console.log('read file is working correctly!!', data);
			}
			res.end();
		});

		// fs.readFile(archive.paths.archivedSites + '/' + path, function(err, data) {
		// 	if (err) {
		// 		res.writeHead(404);
		// 	} else {

		// 		res.write(data);
		// 		console.log('reading archived sites!!', data);
		// 	}
	  // });

  }

  // res.end(archive.paths.list);
};
