// Pull in fractal
const fractal       = require('./fractal.js');
const logger        = fractal.cli.console;

// Gulpy gulp
const gulp          = require('gulp');
const autoprefixer  = require('gulp-autoprefixer');
const babel         = require('gulp-babel');
const buffer        = require('vinyl-buffer');
const browserify    = require('browserify');
const concat        = require('gulp-concat');
const del           = require('del');
const eslint        = require('gulp-eslint');
const glob          = require('glob');
const rename        = require('gulp-rename');
const sass          = require('gulp-sass');
const sassLint      = require('gulp-sass-lint');
const source        = require('vinyl-source-stream');
const sourcemaps    = require('gulp-sourcemaps');
const surge         = require('gulp-surge');
const svgmin        = require('gulp-svgmin');
const svgsymbols    = require('gulp-svg-symbols');
const uglify        = require('gulp-uglify');

// Paths
const paths = {
  src: `${__dirname}/src/`,
  dest: `${__dirname}/tmp/`,
  build: `${__dirname}/www/`,
  dist: `${__dirname}/dist/`
};

// Deploy location:
const surgeURL = 'https://vam-design-guide.surge.sh';


//---
// Empty temp folders
function clean() {
  return del([`${paths.dest}`, `${paths.build}`]);
}


//---
// Setup a local server
function serve() {
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal online at: ${server.url}`);
  });
}


//---
// Create a static build of fractal
// Build location defined in `fractal.js`
function staticBuild() {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build complete');
  });
}


//---
// Deploy to surge
function deploy() {
  return surge({
    project: paths.build,
    domain: surgeURL
  });
}


//---
// Style
function styles() {
  // Look at replacing a lot of this with postCSS
  return gulp.src(`${paths.src}/assets/styles/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${paths.dest}/assets/styles`));
}


//---
// Fonts
function fonts() {
  return gulp.src(`${paths.src}/assets/fonts/**/*`)
    .pipe(gulp.dest(`${paths.dest}/assets/fonts`));
}


//---
// Scripts
const opts = {
  transform: [
        ["babelify", { presets: ["es2015"],
                        plugins: ["transform-class-properties"]
                      }
        ],
      ],
  debug: true
};

const newBundle = entry => {
  opts.entries = entry;
  let b = browserify(opts);

  const rebundle = () => {
    b.bundle()
    .on('error', swallowError)
    .pipe(source(entry))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename('vamscript.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${paths.dest}/assets/scripts`));
  }

  return rebundle();
}

function scripts() {
  gulp.src(`${paths.src}/assets/scripts/precompiled/*.js`)
    .pipe(gulp.dest(`${paths.dest}/assets/scripts`));

  glob(`${paths.src}/assets/scripts/*.js`, function(err, files) {
    var tasks = files.map(function(entry) {
      newBundle(entry);
    });
  });

  return gulp.src('package.json');
}


function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}


//---
// SVG Icons
function svg() {
  return gulp.src(`${paths.src}/assets/svg/*.svg`)
    .pipe(svgmin())
    .pipe(svgsymbols({
      svgClassname: 's-svg-icon',
      templates: [`${paths.src}/assets/templates/svg-template.svg`],
      title: false,
    }))
    .pipe(gulp.dest(`${paths.dest}/assets/svg`));
}


//---
// Prepare for release
function releaseSVG() {
  return gulp.src(`${paths.dest}/assets/svg/*.svg`)
    .pipe(rename('vamicons.svg'))
    .pipe(gulp.dest(`${paths.dist}/svg`));
}

function releaseCSS() {
  return gulp.src(`${paths.dest}/assets/styles/vam-style.css*`)
    .pipe(gulp.dest(`${paths.dist}/css`));
}

function releaseJS() {
  return gulp.src(`${paths.dest}/assets/scripts/*.js*`)
    .pipe(gulp.dest(`${paths.dist}/scripts`));
}

//---
// Linters
function sassLinter() {
  return gulp.src(`${paths.src}/**/*.scss`)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

function jsLinter() {
  return gulp.src(`${paths.src}/**/*.js`)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
}

//---
// Watch
function watch() {
  serve();
  gulp.watch([`${paths.src}/assets/**/*.scss`, `${paths.src}/components/**/*.scss`], styles);
  gulp.watch([`${paths.src}/assets/**/*.js`, `${paths.src}/components/**/_*.js`], scripts);
  gulp.watch(`${paths.src}/assets/svg/*.svg`, svg);
  gulp.watch(`${paths.src}/assets/fonts`, fonts);
}

const compile = gulp.series(clean, gulp.parallel(fonts, svg, styles, scripts));
const buildDistAssets = gulp.parallel(releaseSVG, releaseCSS, releaseJS);
const linter = gulp.series(sassLinter, jsLinter);

gulp.task('dev', gulp.series(compile, watch));
gulp.task('deploy', gulp.series(linter, compile, staticBuild, deploy));
gulp.task('dist', gulp.series(linter, compile, buildDistAssets, staticBuild, deploy, clean));
gulp.task('lint', gulp.series(linter));
