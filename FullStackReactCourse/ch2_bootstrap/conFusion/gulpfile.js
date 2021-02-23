"use strict";
const gulp = require("gulp"),                                    
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    del = require("del"),                                       //this is going to be the clean task
    imagemin = require("gulp-imagemin"),
    uglify = require("gulp-uglify"),
    usemin = require("gulp-usemin"),
    rev = require("gulp-rev"),
    htmlmin = require("gulp-htmlmin"),
    cleanCss = require("gulp-clean-css"),
    flatmap = require("gulp-flatmap");

    
    /* ADDING GULP TASKS FOR SASS AND BROWSER SYNC */
gulp.task("sass", () => {                                       //remember node-sass npm script? we call these gulp tasks
    return gulp.src("./css/*.scss")                             //take all scss file(s) in folder "css"
    .pipe(sass().on("error", sass.logError))                    //sass that file, convert it frm scss syntax to css syntax
    .pipe(gulp.dest("./css"));                                  //then store the converted file in the css folder
});

gulp.task("sass:watch", () => {                                 //watching sass file changes so that we update to css code
    gulp.watch("./css/*.scss", ["sass"]);                       //watch the scss files in css folder, when there run the sass task

});

gulp.task("browser-sync", () => {                               //synchronicity
    var files = [                                               //watch files with the following extentions
        "./*.html",
        "./css/*.css",
        "./js/*.js",
        "./img/*.{png, gif, jpg}"
    ];

    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("default", ["browser-sync"], () => {                  //default task
    gulp.start("sass:watch")
});

gulp.task("clean", () => {                                      //cleaning the dist folder
    return del(["dist"]); 
});

gulp.task("copyfonts", () => {                                  //copying fonts
    gulp.src(
        "./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*")
    .pipe(gulp.dest("./dist/fonts/"));
});

/* COMPRESSING AND MINIFYING FILES */
gulp.task("imagemin", () => {
    return gulp.src("img/*.{png,gif,jpg}")
    .pipe(imagemin({                                            //take files thru this function
        optimazationLevel: 3,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest("dist/img"));                               //destination folder
});

/* PREPARING THE DISTRIBUTION FOLDER AND FILES */
gulp.task("usemin", () => {
    return gulp.src("./*.html")
    .pipe(flatmap((stream, file) => {
        return stream.pipe(usemin({
            css: [rev()],
            html: [() => {
                return htmlmin({
                    collapseWhitespace: true
                })
            }],
            js: [uglify(), rev()],
            inlinejs: [uglify()],
            inlinecss: [cleanCss(), "concat"]
        }))
    }))
    .pipe(gulp.dest("dist/"));                                  //the error was here
});


/*BUILD TASK*/
gulp.task("build", ["clean"], () => {                            // [] means start with this task
    gulp.start("copyfonts", "imagemin", "usemin");
});