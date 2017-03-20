'use strict';

var gulp = require('gulp-help')(require('gulp'));
var pug = require('gulp-pug');
var data = require('gulp-data');
var plumber  = require('gulp-plumber');
var fs = require('fs');
var extend = require('gulp-extend');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var filter = require('gulp-filter');

var yamlMerge = require('gulp-yaml-merge');
var yaml = require('js-yaml');

var config = require('./../config.js');
var handleError = require('./../utils/handleError.js');
var build = require('./../utils/buildHelper.js');

// Compile pug to html

gulp.task('templates', 'Compile templates', ['templates:prepareData'], function() {
  var dest = build.isBuild() ? config.templates.destBuild : config.templates.dest;

  return gulp.src(config.templates.src)
    .pipe(plumber(handleError))
    .pipe(data(function() {
      return yaml.safeLoad(fs.readFileSync(config.templatesData.dataPath, 'utf8'));
      
    }))
    .pipe(pug(config.templates.cfg))
    .pipe(gulp.dest(dest));
  
});

// Concat *.json file to single data.json

gulp.task('templates:prepareData', 'Merge views data', function() {
  return gulp.src(config.templatesData.src)
    .pipe(yamlMerge(config.templatesData.dataName))
    
    .pipe(gulp.dest(config.templatesData.dest));
});
