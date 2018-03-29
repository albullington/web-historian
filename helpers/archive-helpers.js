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
	fs.readFile(exports.paths.list, 'utf8', (err, urls) => {
		if (err) throw err;
		urls = urls.toString().split('\n');
		callback(urls);
	});
};

exports.isUrlInList = function(url, callback) {
	exports.readListOfUrls(function(urls) {
		for (var i = 0; i < urls.length; i++) {
			return callback(urls[i] === url);
		}
	});
};

exports.addUrlToList = function(url, callback) {
	fs.appendFile(exports.paths.list, url + '\n', (err) => {
		if (err) {
			console.log('error', err)
			callback(false);
		} else {
		  callback(true);
		}
		console.log('appended file', url)
	});
	// setTimeout(function() {
	// 	callback()
	// }, 1000);
};

exports.isUrlArchived = function(url, callback) {
	console.log('here is my url', url);
	fs.access(exports.paths.archivedSites + '/' + url, (err) => {
		if (err) throw err;
		return callback();
	})
	// callback();
	//this will check to see if there is already a folder with this URL name
	// fs.readdir(exports.paths.archivedSites, (err, files) => {
 //    	console.log('here are my files', files);
 //    for (var i = 0; i < files.length; i++) {
 //    	if (files[i] === url) {
 //    		return true;
 //    	} else {
 //    		return false;
 //    	}
 //    }
	// });
	// console.log('and my callback', callback);
 //    callback();
	// archive.paths.archivedSites + '/www.example.com'
};

exports.downloadUrls = function(urls) {
};
