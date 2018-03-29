var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
	var urlArray = [];
	fs.readFile(exports.paths.list, 'utf8', (err, data) => {
		if (err) throw err;
		urlArray.push(callback(data.split('\n')));
		//console.log(data);
	});
};

exports.isUrlInList = function(url, callback) {
	var newArray = [];

	fs.readFile(exports.paths.list, 'utf8', (err, data) => {
	  if (err) throw err;
	  newArray = data.split('\n');
    for (var i = 0; i < newArray.length; i++) {
    	return callback(newArray[i] === url);
    }
	});
};

exports.addUrlToList = function(url, callback) {
	//console.log('url is here', url);
	console.log('callback is here', callback);
	fs.appendFile(exports.paths.list, url + '\n', {flag: 'a'}, function() {
		callback ? callback() : null;
		console.log('otherwise, a success', url);
	});
};

exports.isUrlArchived = function(url, callback) {
	//this will check to see if the URL is already in the archive file/folder
};

exports.downloadUrls = function(urls) {
};
