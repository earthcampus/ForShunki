// モジュールの定義
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// 関数の定義
const ImgImagemin = function() {
  return gulp
  .src("./assets/img/**") //タスクを実行するディレクトリを指定
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img")) // 出力先ディレクトリを指定
};
// 処理実行
export default(done) => {
  ImgImagemin();
  done();
}