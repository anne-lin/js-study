const gulp=require("gulp");
const uglify=require("gulp-uglify");
const concat=require("gulp-concat");
const rename=require("gulp-rename");
const babel=require("gulp-babel");
const sourcemaps=require("gulp-sourcemaps");
const cssmin=require("gulp-cssmin");

//执行顺序很重要
gulp.task("js",()=>{
    return gulp.src(["./src/js/**/*.js"])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets:["@babel/env"]
        })) //编译es6语法
        //.pipe(concat("bundle.min.js")) //打包到一起
        .pipe(uglify()) //执行压缩
        .pipe(sourcemaps.write())
        .pipe(rename({suffix:".min"})) //重命名
        .pipe(gulp.dest("./build/js/")) //压缩文件指向文件
});

gulp.task("css",()=>{
    return gulp.src(["./src/css/*.css"])
        .pipe(cssmin())
        .pipe(gulp.dest("./build/css/"))
});

//gulp.task("default",["js"]);
