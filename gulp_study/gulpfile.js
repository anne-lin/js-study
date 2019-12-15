const gulp=require("gulp");
const uglify=require("gulp-uglify");
const concat=require("gulp-concat");
const rename=require("gulp-rename");

//执行顺序很重要
gulp.task("js",()=>{
    return gulp.src(["./src/js/**/*.js"])
        //.pipe(concat("bundle.min.js")) //打包到一起
        .pipe(uglify()) //执行压缩
        .pipe(rename({suffix:".min"})) //重命名
        .pipe(gulp.dest("./build/js/")) //压缩文件指向文件
});

//gulp.task("default",["js"]);
