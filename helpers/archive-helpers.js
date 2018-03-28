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

// console.log('file paths', exports.paths.archivedSites);
// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
	// fs.readFile(exports.paths.archivedSites + '/sites.txt', callback);
};

exports.isUrlInList = function(url, callback) {
	//this will check to see if the URL is already in the queue for the worker to handle
};

exports.addUrlToList = function(url, callback) {
	//this will write a URL to the fs file/folder
};

exports.isUrlArchived = function(url, callback) {
	//this will check to see if the URL is already in the archive file/folder
};

exports.downloadUrls = function(urls) {
};
