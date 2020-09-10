var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");

var paths = {
  styles: {
    src: "node_modules/bootstrap/dist/css/*.css",
    dest: "assets/css",
  },
  script: {
    src: [
      "node_modules/jquery/dist/jquery.js",
      "node_modules/bootstrap/dist/js/bootstrap.js",
      "node_modules/jquery-ui/build/release.js",
    ],
    dest: "assets/js/compiled",
  },
  scss: {
    src: ["node_modules/bootstrap/scss/bootstrap.scss"],
    dest: "assets/css/compiled",
  },
  image: [],
};

gulp.task("buildCSS", function () {
  return gulp
    .src(paths.scss.src)
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(cleanCSS()) // Minify CSS files..
    .pipe(gulp.dest(paths.scss.dest));
});

gulp.task("buildJS", function () {
  return gulp.src(paths.script.src).pipe(gulp.dest(paths.script.dest));
});

gulp.task("main", gulp.series("buildCSS", "buildJS"));
/*
    > gulp main
*/
