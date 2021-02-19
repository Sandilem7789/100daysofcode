'use strict';
module.exports = (grunt) => {
    
    require("time-grunt")(grunt);
    require("jit-grunt")(grunt, {
        useminPrepare: "grunt-usemin"
    });
    grunt.initConfig({
        sass: {                                                 //configuring the sass task
            dist: {
                files: {
                    "css/styles.css": "css/styles.scss"
                }
            }
        },
        watch: {                                                //configuring the watch task
            files: "css/*.scss", 
            tasks: ["sass"]
        },
        browserSync: {                                          //configuring the browser sync task
            dev: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*.html",
                        "js/*.js"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },
        copy: {                                                 //configuring the copy task
            js: {                                               //here i am coping the Jquery file because it couldnt be minified
                files: [{
                    expand: true,
                    dot:true,
                    cwd: "./",
                    src: ["js/*.js"],
                    dest: "dist"
                }]
            },
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ["*.html"],
                    dest: "dist"
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "node_modules/font-awesome",           //copy files from here
                    src: ["fonts/*.*"],                         //source where we will copy from in the "cwd"[current working directory]
                    dest: "dist"
                }]
            }
        },
        clean: {                                                //configuring the clean task
            src: ["dist/"],
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ["img/*.{png, gif, jpg}"],
                    dest: "dist/"
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: "dist",
                src: ["contactus.html", "aboutus.html", "index.html"]
            },
            options: {
                flow: {
                    steps: {
                        css: ["cssmin"],
                        js: ["uglify", ]
                    },
                    post: {
                        css: [{
                            name: "cssmin",
                            createConfig: (context, block) => {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                };
                            }
                        }]
                    }
                }
            }
        },
        concat: {
            options: {
                separator: ";"
            },
            dist: {}
        },
        uglify: {
            dist: {}
        },
        cssmin: {
            dist: {}
        },
        filerev: {                                              //adds files revision number so that browser cache can distinguish files of the same name from newer builds
            options: {
                encoding: "utf8",
                algorithm: "md5",
                length: 20
            },
            release: {
                files: [{
                    src: [
                        "dist/js/*.js",
                        "dist/css/*.css"
                    ]
                }]
            }
        },
        usemin: {
            html: ["dist/contactus.html", "dist/aboutus.html", "dist/index.html"],
            options: {
                assetsDirs: ["dist", "dist/css", "dist/js"]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapsedWhitespace: true
                },
                files: {
                    "dist/index.html": "dist/index.html",
                    "dist/contactus.html": "dist/contactus.html",
                    "dist/aboutus.html": "dist/aboutus.html",
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-browser-sync");                   //when this is missing, doesnt work properly
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-filerev");
    grunt.loadNpmTasks("grunt-usemin");

    grunt.registerTask("css", ["sass"]);
    grunt.registerTask("default", ["browserSync", "watch"]);
    grunt.registerTask("build", [
        "clean",                                                //these task must be in order.
        "copy",
        "imagemin",
        "useminPrepare",
        "concat",
        "cssmin",
        "uglify",
        "filerev",
        "usemin"
    ]);
};