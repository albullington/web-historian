var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');
var url = require('url');
var headers = require('./http-helpers');

exports.handleRequest = function (req, res) {
  var parsedUrl = url.parse(req.url);
  console.log('this is the parsedUrl', parsedUrl.pathname, 'this is the current reqMethod', req.method);

	if (req.method === 'GET') {
		res.writeHead(200, headers['Content-Type']);
    //only send users to index.html if the filepath is not specified
		var filename = '';
		if (parsedUrl.pathname === '/') {
      filename = archive.paths.siteAssets + '/index.html'
		} else {
			filename = archive.paths.archivedSites + '/' + parsedUrl.pathname;
		};

		fs.readFile(filename, function(err, data) {
			if (!err) {
				res.write(data);
			} else {
				res.writeHead(404, headers['Content-Type']);
			}
			res.end();
		});
  }

  if (req.method === 'POST') {
  	res.writeHead(302, headers['Content-Type']);

    var newURL = [];
    var editedURL = '';
    req.on('data', (chunk) => {
			newURL.push(chunk);
			//console.log('this is a chunk', chunk);
	  }).on('end', () => {
		  	newURL = Buffer.concat(newURL).toString();
		  	editedURL = newURL.split('=').splice(1, 1).toString() + '\n';
		  	//console.log('my new URL is ready', editedURL);
	    fs.appendFile(archive.paths.list, editedURL, {flag: 'a'}, (err) => {
	  		if (err) throw err;
	  	  //console.log('data was appended successfully', editedURL);
	      res.end();
	      });
    });
  };

};