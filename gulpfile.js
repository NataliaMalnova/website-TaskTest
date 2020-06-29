let project_folder = "dist";
let source_folder = "#src";


let path = {
    build: {
        html: project_folder + "/",
        php: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        php: source_folder + "/*.php",
        //css: source_folder + "/css/*.less",
        css:[source_folder + "/css/main.less", source_folder + "/css/home.less", source_folder + "/css/recom.less", source_folder + "/css/rating.less", source_folder + "/css/news.less", source_folder + "/css/video.less", source_folder + "/css/about.less", source_folder + "/css/footer.less"],
        //js: source_folder + "/js/*.js",
        js: [source_folder + "/js/main.js", source_folder + "/js/selectOpen.js", source_folder + "/js/menuOpen.js", source_folder + "/js/box.js", source_folder + "/js/scrolling.js", source_folder + "/js/tabs.js"],
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.{eot,ttf,woff,woff2,css}",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/css/**/*.less",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp,JPG}"
    },
    clean: "./" + project_folder + "/"
}


let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify-es').default,
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

function browserSync (params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + ""
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}


function css() {
    return src(path.src.css)
    .pipe(concat('style.less'))
    .pipe(
        less({
            outputStyle: "expanded"
        })
    )
    .pipe(group_media())
    .pipe(
        autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
        })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css({
        level: 2
    }))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
    //.pipe(fileinclude())
    .pipe(concat('script.js'))
    .pipe(babel())
    // .pipe(babel({
    //     presets: ['@babel/env']
    // }))
    .pipe(dest(path.build.js))
    .pipe(
        uglify()
    )
    .pipe(rename({
        extname: ".min.js"
    }))
    
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts(params) {
    return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}

function php(params) {
    return src(path.src.php)
    .pipe(dest(path.build.php))
}


function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params){
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, php));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.php = php;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
