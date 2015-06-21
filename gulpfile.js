var gulp  = require('gulp'),
    path  = require('path'),
    key   = require('keypress'),
    karma = require('karma').server;

/**
 * Setup guard-like keypresses for watch
 */
gulp.guard = function() {

  key(process.stdin);
  process.stdin.on('keypress', function (ch, key) {
    console.log();

    // on return
    if (key.name == 'return') {
      console.log('Running all specs...');
      gulp.start('test');
    }
    // on ctrl + c
    else if (key.name == 'c' && key.ctrl) {
      console.log('Bye bye...');
      process.stdin.pause();
      process.exit();
    }
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
};

/**
 * Run the Karma server using a config file
 */
gulp.karmaServe = function(configFile, cb) {
  karma.start({
    configFile: path.resolve(configFile),
    singleRun: true
  }, cb);
};

gulp.task('test', function(cb) {
  gulp.karmaServe('karma.conf.js', cb);
});

gulp.task('watch', function() {
  gulp.guard();
  gulp.watch(['www/js/**/*.js', 'spec/**/*_spec.js'], ['test']);
});

gulp.task('default', ['test', 'watch']);
