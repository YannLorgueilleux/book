// acces à la console
// cd C:\wamp64\www\yann-lorgueilleux.info\book && npm install
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp watch


// Requis
var gulp = require('gulp');
// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// init de browser synchronisation
var browserSync = require('browser-sync').create();

// init run Sequence
var runSequence = require('run-sequence');

// init sourcesMaps
var sourcemaps = require('gulp-sourcemaps');

// init cache (pour ne pas traiter les fichiers non modifiers)
//var cache = require('gulp-cached');


// Variables de chemins
var src = './src'; // dossier de travail
var tmp = './tmp'; // dossier temporaire
var dist = './dist'; // dossier à livrer



//=====BUILD ==================================

// tâche de nettoyage
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp clean
var del = require('del');

gulp.task('clean', function () {
  console.log('===================== TACHES : CLEAN =======================');
  return del(['tmp', 'dist']);
});




// Taches sur CSS
//
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp build-foundation
gulp.task('build-foundation', function () {
 console.log('BUIL ===================== TACHES : compil foundation =======================');
  return gulp.src('src/_assets/_vendors/foundation-6.4.2/scss/my-foundation.scss')
    .pipe(plugins.plumber())
    //.pipe(sourcemaps.init())
    .pipe((plugins.sass().on('error', plugins.sass.logError)))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/_assets/css/'))
    // Synchronisation du navigateur
    .pipe(browserSync.reload({stream: true}))
    ;
});

//
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp buid-scss
gulp.task('build-scss', function () {
 console.log('BUIL ===================== TACHES : prepare-css =======================');
  return gulp.src('src/_assets/css/styles.scss')
    .pipe(plugins.plumber())
    .pipe(sourcemaps.init())
    .pipe((plugins.sass().on('error', plugins.sass.logError)))
    //.pipe(plugins.csscomb())
    //.pipe(plugins.cssbeautify({indent: '  '}))
    //.pipe(plugins.autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('tmp/_assets/css/'))
    // Synchronisation du navigateur
    .pipe(browserSync.reload({stream: true}));
});


// Tâche de concatenation des JS
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp build-js
var useref = require('gulp-useref');
var lazypipe = require('lazypipe');

gulp.task('build-js', function(){
  console.log('BUIL ===================== TACHES : prepare-js =======================');
  return gulp.src('src/**/*.html')
    .pipe(plugins.plumber())
    .pipe(useref())
    .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
    .pipe(sourcemaps.write('.'))


    .pipe(gulp.dest('tmp'))
});





// INSERTION de blocs  HTML
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp inserthtml
var extender = require('gulp-html-extend');
var watch = require('gulp-watch');


gulp.task('inserthtml', function () {
  console.log('BUILD ===================== TACHES : INSERT HTML =======================');
  return gulp.src('tmp/{,_includes/}/*.html')

    .pipe(plugins.plumber())
    // Generates HTML includes
     .pipe(extender({
       annotations: false,
       verbose: false
     })) // default options

    .pipe(gulp.dest('tmp'))

    // Synchronisation du navigateur
    .pipe(browserSync.reload({stream: true}))
});


// Tâche dupliques les _INCLUDES vers le dossier temporaire
gulp.task('copy-includes-tmp', function(){
  console.log('===================== TACHES : COPY INCLUDES VERS TMP=======================');
  gulp.src(['src/_includes/**/*'])
    .pipe(plugins.plumber())
    .pipe(gulp.dest('tmp/_includes'))
    // Synchronisation du navigateur
    //.pipe(browserSync.reload({stream: true}));
});


// Tâche dupliques les IMAGES
gulp.task('copy-img-tmp', function(){
  console.log('===================== TACHES : COPY IMAGES VERS TMP =======================');
  gulp.src(['src/_assets/img/**/*'])
    .pipe(plugins.plumber())
    .pipe(gulp.dest('tmp/_assets/img'))
    // Synchronisation du navigateur
    .pipe(browserSync.reload({stream: true}));
});

// Tâche dupliques les IMAGES
gulp.task('copy-svg-tmp', function(){
  console.log('===================== TACHES : COPY SVG VERS TMP=======================');
  gulp.src(['src/_assets/svg/**/*.svg'])
    .pipe(plugins.plumber())
    .pipe(gulp.dest('tmp/_assets/svg/'))
    // Synchronisation du navigateur
    .pipe(browserSync.reload({stream: true}));
});

// Tâche dupliques les Videos
gulp.task('copy-videos-tmp', function(){
  console.log('===================== TACHES : COPY VIDEOS VERS TMP=======================');
  gulp.src(['src/_assets/videos/**/*'])
    .pipe(plugins.plumber())
    .pipe(gulp.dest('tmp/_assets/videos/'))
    // Synchronisation du navigateur
    .pipe(browserSync.reload({stream: true}));
});


// generate a todo.md from your javascript files
var todo = require('gulp-todo')
gulp.task('todo', function() {
    gulp.src(['src/**/*.+(scss|css|html|js)', '!src/_assets/_vendors/**/*.+(scss|css|html|js)'] )
        .pipe(todo())
        .pipe(gulp.dest('./'));
        // -> Will output a TODO.md with your todos
});



// PROD==========================================================================



// Tâche "minify" = minification CSS (destination -> destination)
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp minifycss
gulp.task('minifycss', function () {
  console.log('===================== TACHES : MINIFY CSS =======================');
  return gulp.src('tmp/_assets/css/styles.css')
    .pipe(plugins.plumber())
    .pipe(plugins.csso())
    //.pipe(plugins.rename({
    //  suffix: '.min'
    //}))
    .pipe(gulp.dest('dist/_assets/css/'));
});

// Minification des IMAGES
//cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp minImages
const imagemin = require('gulp-imagemin');
gulp.task('minImages', () =>
   gulp.src('tmp/_assets/img/**/*.+(png|jpg|gif)')
      .pipe(plugins.plumber())
      .pipe(imagemin([
          imagemin.gifsicle({interlaced: true}),
          imagemin.jpegtran({progressive: true}),
          imagemin.optipng({optimizationLevel: 5}),
          imagemin.svgo({plugins: [{removeViewBox: true}]})
      ]))
       .pipe(gulp.dest('dist/_assets/img'))
);



// Minification des SVG
//cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp minImages
//const imagemin = require('gulp-imagemin');
gulp.task('minsvg', () =>
   gulp.src('tmp/_assets/svg/**/*.svg)')
      .pipe(plugins.plumber())
      .pipe(gulp.dest('dist/_assets/svg'))
);





// Tâche "critical" = inline css supérieur à la ligne de flotaison
// from : https://www.fourkitchens.com/blog/article/use-gulp-automate-your-critical-path-css/
// from : https://github.com/addyosmani/critical
//
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp critical
//
var gutil = require('gulp-util');
var critical = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    console.log('===================== TACHES : CRITICAL =======================');
    return gulp.src('tmp/*.html')

      .pipe(plugins.plumber())

        .pipe(critical({
          base: 'tmp/',
          inline: true,
          minify:true,
          extract: false,
          // Viewport width
          width: 360,
          // Viewport height
          height: 700,
          css: ['dist/_assets/css/styles.css']}))
        .on('error', function(err) {
          gutil.log(gutil.colors.red(err.message));
        })
        .pipe(gulp.dest('dist'))

        // Synchronisation du navigateur
        // .pipe(browserSync.reload({
        //   stream: true
        // }))
        ;

});



var minify = require('gulp-minify');

gulp.task('min-js', function() {
  gulp.src('tmp/_assets/js/*.js')
    .pipe(plugins.plumber())
    .pipe(minify())
    .pipe(gulp.dest('dist/_assets/js'))
});


// Tâche cleanHtml
//remove unneeded whitespaces, line-breaks, comments, etc from the HTML.
//
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp cleanhtml
var cleanhtml = require('gulp-cleanhtml');
var htmlmin = require('gulp-htmlmin');

gulp.task('cleanhtml', function(){
  gulp.src('tmp/**/*.html')
    .pipe(plugins.plumber())
    .pipe(cleanhtml())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


// ================================================


// lancements automatiques
gulp.task('watch', ['browserSync' ] , function(){
  gulp.watch('src/_assets/**/*.scss', ['build-styles']);
  // Other watchers
  gulp.watch('src/{,projets/}{,_includes/}*.html',{cwd:'./'},  ['build-html'] , browserSync.reload  );

  gulp.watch('src/_assets/{,img/}**/*.+(png|jpg|gif)',{cwd:'./'}, ['copy-img-tmp'] , browserSync.reload);
  gulp.watch('src/_assets/{,svg/}**/*.svg',{cwd:'./'}, ['copy-svg-tmp'] , browserSync.reload);


  gulp.watch('src/_assets/{,js/}**/*.js',{cwd:'./'},  ['build-html'] , browserSync.reload  );


//  gulp.watch('tmp/**/*.html' , browserSync.reload);
})


// Synchronisation du navigateur
gulp.task('browserSync', function() {
  browserSync.init({
    browser: ["chrome"],
    server: {
      baseDir: 'tmp'
    },
  })
})

// Synchronisation du navigateur
gulp.task('browserSyncProd', function() {
  browserSync.init({
    browser: ["chrome"],
    server: {
      baseDir: 'dist'
    },
  })
})

// ===========================================

// Tâche "build"
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp build
//gulp.task('build', ['scss', 'inserthtml' , 'browserSync'] );

gulp.task('build-styles', function(callback) {
  runSequence( 'build-foundation', ['build-scss', ] ,  callback);
});

gulp.task('copy-ressources', function(callback) {
  runSequence( [ 'copy-svg-tmp' , 'copy-videos-tmp' ] , ['copy-img-tmp'],  callback);
});

gulp.task('build-html', function(callback) {
  runSequence( [ 'build-js' ,'copy-includes-tmp' ] , ['inserthtml'] ,  callback)
});



gulp.task('build', function(callback) {
  runSequence( ['build-styles', 'copy-ressources'  ] , ['build-html'] ,'todo' , 'watch' ,callback);
});



// Tâche "prod" = Build + minify
// cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp prod
//gulp.task('prod', [ 'minifycss' , 'critical' , 'browserSyncProd']);

// 'critical' ,
gulp.task('prod', function(callback) {
  runSequence('minifycss',
              ['minImages','minsvg'],
              ['min-js'],
              'critical',
              'browserSyncProd',
              callback);
});

// Tâche par défaut
 // cd C:\wamp64\www\yann-lorgueilleux.info\book && gulp
gulp.task('default', ['build']);
