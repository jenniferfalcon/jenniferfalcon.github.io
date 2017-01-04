var src               = 'app';
var build             = 'dist';

module.exports = {
  browsersync: {
    server: {
      baseDir: [build, src]
    },
    port: 9999,
    files: [
      build + '/css/*.css',
      build + '/js/*.js',
      build + '/images/**',
      build + '/fonts/*'
    ]
  },
  jekyll: {
    src:    src,
    dest:   build,
    config: '_config.yml'
  },
  sass: {
    input: src + '/_sass/*.scss',
    output: src + '/css',
    options: {}
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  watch: {
    jekyll: [
      '_config.yml',
      src + '/_data/**/*.{json,yml,yaml,csv}',
      src + '/_projects/**/*',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*',
      src + '/css/*.css',
      src + '/js/*.js'
    ],
    sass:    src + '/_sass/**/*.{sass,scss}'
  }
};
