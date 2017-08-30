var gulp = require("gulp");
var spawn = require("child_process").spawn;
var node;
var server = require("gulp-server-livereload");
var concat = require("concat");

gulp.task("server", function(){

    if ( node )
    {
        node.kill();
    }

    node = spawn("node", ["index.js"], {stdio: "inherit"});
});


gulp.task("default", function()
{
    //gulp.run
   // gulp.run("server");

    //gulp.src("./scripts/**/*.js")
   /* .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./lib/all.min.js"))*/
    //npm install gulp-uglify gulp-concat gulp-server-livereload --save

    //uglifi comprime el archivo
    //

    gulp.watch(["index.js","./scripts/**/*.js"], () => {
         gulp.run("server");
    });
});


gulp.task("serve", () => {
    gulp.src("app")
        .pipe(server({
            port:8100,
            defaultFile: "index.html",
            livereload: true,
            open: true
        }));
});
/*
//Precondicion es tarea 1  y tarea 2 antes de ejucutarse la default
gulp.task("default",["tarea1","tarea2"], function(){
    console.log("Por defecto");
});

gulp.task("tarea1", function(){
    console.log("Tarea 1");
});

gulp.task("tarea2", function(){
    console.log("Tarea 2");
});

*/
//A gulp lo llamo desde terminal escribiendo gulp tarea1