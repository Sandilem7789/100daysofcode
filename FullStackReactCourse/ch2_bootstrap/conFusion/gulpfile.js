"use strict";
var gulp = require("gulp"),                                    
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    del = require("del");                                       //this is going to be the clean task

    
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

gulp.task("clean", () => {
    return del([])
});