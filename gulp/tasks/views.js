'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var templateCache  = require('gulp-angular-templatecache');

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  gulp.src('app/index.html')
    .pipe(gulp.dest(config.dist.root));

  // Process any other view files from app/modules
  return gulp.src(config.views.src)
    .pipe(templateCache('templates.templates.js', {
      standalone: false,
      module: 'app.templates'
    }))
    .pipe(gulp.dest(config.views.dest));

});
