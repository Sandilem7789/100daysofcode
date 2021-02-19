"use strict";
var gulp = require("gulp"), 
    sass = require("gulp-sass"),
    browserSync = require("browser-sync");

    
    /* ADDING GULP TASKS FOR SASS AND BROWSER SYNC */
gulp.task("sass", () => {
    return gulp.src("./css/*./scss")                            //take all scss file(s) in folder "css"
    .pipe(sass().on("error", sass.logError))                    //sass that file, convert it frm scss syntax to css syntax
    .pipe(gulp.dest("./css"));                                  //then store the converted file in the css folder
});
