const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const concatenate = require("gulp-concat");
const clean_css = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

const scssFiles = [
    "./node_modules/bootstrap/scss/_variables.scss",
    "./node_modules/bootstrap/scss/bootstrap.scss",
    "./app/src/styles/scss/*.scss"
];

const jsLibraries = [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
];

gulp.task("sass", () => {
    gulp
        .src(scssFiles)
        .pipe(sass())
        .pipe(clean_css())
        .pipe(rename("styles.css"))
        .pipe(gulp.dest("./public/css/"));
});

gulp.task("watch", () => {
    gulp.start("sass");
    gulp.watch(scssFiles, ["sass"]);
});

gulp.task("js", () => {
    gulp
        .src(jsLibraries)
        .pipe(rename("vendor.min.js"))
        .pipe(gulp.dest("./public/js"))
});

gulp.task('hello', () => {
    console.log("GULP OBJECT : ", gulp);
});